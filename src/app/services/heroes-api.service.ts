import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UiActions } from '../state/actions';
import { Store } from '@ngrx/store';
import * as fromStore from '../state';
import { Hero } from '../state/models/ui.models';

@Injectable({
  providedIn: 'root',
})
export class HeroesApiService {

  readonly serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<fromStore.HeroesState>) {
  }

  addHero(hero: Hero) {
    this.http.post(`${this.serverUrl}addHero`, {
      id: hero.id,
      name: hero.name,
    })
      .subscribe((result: Hero) => {
        if (result) {
          this.store.dispatch(new UiActions.AddHero(hero));
        } else {
          console.log('Error during AddHero');
        }
      });
  }

  deleteHero(heroId: number) {
    this.http.post(`${this.serverUrl}deleteHero`, {
      id: heroId,
    })
      .subscribe(() => {
        this.store.dispatch(new UiActions.DeleteHero(heroId));
      });
  }

  getFavouriteHeroes() {
    this.http.get(`${this.serverUrl}getFavouriteHeroes`)
      .subscribe((result: number[]) => {
        this.store.dispatch(new UiActions.SetFavouriteHeroes(result));
      });
  }

  getHeroes() {
    this.http.get(`${this.serverUrl}getHeroes`)
      .subscribe((res: any[]) => {
        this.store.dispatch(new UiActions.SetHeroesList(res.map(a => {
          return {id: a.id, name: a.name};
        })));
      });
  }

  setFavouriteHeroes(heroIds: number[]) {
    this.http.post(`${this.serverUrl}setFavouriteHeroes`, {
      heroIds: heroIds,
    })
      .subscribe((result: number[]) => {
        this.store.dispatch(new UiActions.SetFavouriteHeroes(result));
      });
  }

  updateHero(hero: Hero) {
    this.http.put(`${this.serverUrl}updateHero`, {
      id: hero.id,
      name: hero.name,
    })
      .subscribe((result: Hero) => {
        if (result) {
          this.store.dispatch(new UiActions.SetHeroName(result.name, result.id));
        } else {
          console.log('Error during HeroUpdate');
        }
      });
  }
}
