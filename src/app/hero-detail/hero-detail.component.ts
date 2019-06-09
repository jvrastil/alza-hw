import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../state';
import { Hero } from '../state/models/ui.models';

import { HeroesApiService } from '../services/heroes-api.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {

  heroesList: Hero[] = [];
  heroName: string;
  heroId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<fromStore.HeroesState>,
    private heroApi: HeroesApiService,
  ) {
    this.store.pipe(select(fromStore.getHeroesList))
      .subscribe(val => this.heroesList = val);

    const hero = this.heroesList.find(a => a.id === this.data.heroId);
    if (hero) {
      this.heroName = hero.name;
    } else {
      this.heroName = '';
    }
    this.heroId = this.data.heroId;
  }

  onHeroNameChange() {
    if (this.heroesList.find(a => a.id === this.data.heroId)) {
      this.heroApi.updateHero({
        id: this.data.heroId,
        name: this.heroName,
      });
    } else {
      this.heroApi.addHero({
        id: this.data.heroId,
        name: this.heroName,
      });
    }
  }
}
