import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../state';
import { Hero } from '../state/models/ui.models';
import { MatDialog } from '@angular/material';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesApiService } from '../services/heroes-api.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {

  heroes: Hero[] = [];
  favouriteHeroes: number[] = [];
  lastClickedHeroId: number;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromStore.HeroesState>,
    private heroApi: HeroesApiService,
  ) {
    this.store.pipe(select(fromStore.getHeroesList))
      .subscribe(val => this.heroes = val);

    this.store.pipe(select(fromStore.getFavouriteHeroes))
      .subscribe(val => this.favouriteHeroes = val);

    if (this.favouriteHeroes && this.favouriteHeroes.length > 0) {
      this.lastClickedHeroId = this.favouriteHeroes[0];
    }

    this.heroApi.getFavouriteHeroes();
  }

  addHero() {
    this.dialog.open(HeroDetailComponent, {
      data: {
        heroId: Math.max(...this.heroes.map(a => a.id)) + 1,
      },
    });
  }

  deleteHero() {
    if (!this.lastClickedHeroId) {
      return;
    }
    const index = this.favouriteHeroes.indexOf(this.lastClickedHeroId);
    if (index > -1) {
      const newFavouriteHeroes = JSON.parse(JSON.stringify(this.favouriteHeroes));
      this.heroApi.setFavouriteHeroes(newFavouriteHeroes.filter(a => a !== this.lastClickedHeroId));
    }

    this.heroApi.deleteHero(this.lastClickedHeroId);
  }

  isFavourite(heroId: number): boolean {
    if (!this.favouriteHeroes || this.favouriteHeroes.length === 0) {
      return false;
    }
    return this.favouriteHeroes.indexOf(heroId) > -1;
  }

  isHighlighted(heroId: number): boolean {
    return this.lastClickedHeroId === heroId;
  }

  showDetail() {
    this.dialog.open(HeroDetailComponent, {
      data: {
        heroId: this.lastClickedHeroId,
      },
    });
  }

  toggleFavouriteHero(heroId: number) {
    const newFavouriteHeroes = Object.assign([], this.favouriteHeroes);
    if (newFavouriteHeroes.indexOf(heroId) > -1) {
      newFavouriteHeroes.splice(newFavouriteHeroes.indexOf(heroId), 1);
    } else {
      newFavouriteHeroes.unshift(heroId);
    }

    this.lastClickedHeroId = heroId;
    this.heroApi.setFavouriteHeroes(newFavouriteHeroes);
  }
}
