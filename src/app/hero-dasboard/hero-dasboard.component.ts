import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Hero } from '../state/models/ui.models';
import * as fromStore from '../state';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesApiService } from '../services/heroes-api.service';

@Component({
  selector: 'app-hero-dasboard',
  templateUrl: './hero-dasboard.component.html',
  styleUrls: ['./hero-dasboard.component.css'],
})
export class HeroDasboardComponent {

  favouriteHeroes: number[] = [];
  heroesList: Hero[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<fromStore.HeroesState>,
    private heroApi: HeroesApiService,
  ) {
    this.store.pipe(select(fromStore.getHeroesList))
      .subscribe(val => this.heroesList = val);
    this.store.pipe(select(fromStore.getFavouriteHeroes))
      .subscribe(val => this.favouriteHeroes = val);

    this.heroApi.getFavouriteHeroes();
  }

  getClass(index: number): string {
    return `dasboard-tile rank-${index}`;
  }

  getHeroName(id: number): string {
    return this.heroesList.find(a => a.id === id).name;
  }

  showDetail(heroId: number) {
    this.dialog.open(HeroDetailComponent, {
      data: {
        heroId: heroId
      }
    });
  }
}
