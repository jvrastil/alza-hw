import { Action } from '@ngrx/store';
import { DisplayComponentEnum, Hero } from '../models/ui.models';

export enum UiActionTypes {
  SetHeroesList      = 'Set Heroes list',
  SetFavouriteHeroes = 'Set favourite heroes',
  SetHeroName        = 'Set Hero name',
  OpenDasboardOrList = 'Open Dasboard or List',
  AddHero            = 'Add Hero',
  DeleteHero         = 'Delete Hero',
}

export class SetHeroesList implements Action {
  readonly type = UiActionTypes.SetHeroesList;

  constructor(public payload: Hero[]) {
  }
}

export class SetFavouriteHeroes implements Action {
  readonly type = UiActionTypes.SetFavouriteHeroes;

  constructor(public payload: number[]) {
  }
}

export class SetHeroName implements Action {
  readonly type = UiActionTypes.SetHeroName;

  constructor(public payload: string, public heroId: number) {
  }
}

export class OpenDasboardOrList implements Action {
  readonly type = UiActionTypes.OpenDasboardOrList;

  constructor(public payload: DisplayComponentEnum) {
  }
}

export class AddHero implements Action {
  readonly type = UiActionTypes.AddHero;

  constructor(public payload: Hero) {
  }
}

export class DeleteHero implements Action {
  readonly type = UiActionTypes.DeleteHero;

  constructor(public payload: number) {
  }
}

export type All =
  | SetHeroesList
  | SetFavouriteHeroes
  | SetHeroName
  | OpenDasboardOrList
  | AddHero
  | DeleteHero;
