import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromUi from './ui.reducer';
import { State } from './ui.reducer';

export interface HeroesState {
  ui: fromUi.State;
}

export const reducers: ActionReducerMap<HeroesState> = {
  ui: fromUi.reducer,
};

export const getHeroesState = createFeatureSelector<HeroesState>('heroes');

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['heroes'],
    rehydrate: true,
  })(reducer);
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<any>[] = [logger, storeFreeze, localStorageSyncReducer];
