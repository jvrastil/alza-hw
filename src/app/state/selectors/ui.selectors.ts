import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUi from '../reducers/ui.reducer';

export const getUiState = createSelector(
  fromFeature.getHeroesState,
  (state: fromFeature.HeroesState) => state.ui,
);

export const getHeroesList = createSelector(getUiState, fromUi.getHeroesList);
export const getFavouriteHeroes = createSelector(getUiState, fromUi.getFavouriteHeroes);
export const getOpenedComponent = createSelector(getUiState, fromUi.getOpenedComponent);
