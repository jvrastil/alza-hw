import { UiActions } from '../actions';
import { DisplayComponentEnum, Hero } from '../models/ui.models';
import { UiActionTypes } from '../actions/ui.actions';

export interface State {
  heroesList: Hero[];
  favouriteHeroes: number[];
  openedComponent: DisplayComponentEnum;
}

const initialState: State = {
  heroesList: [
    {
      id: 0,
      name: 'AAAA',
    }, {
      id: 1,
      name: 'BBBB',
    }, {
      id: 2,
      name: 'CCCC',
    }, {
      id: 3,
      name: 'DDDD',
    },
  ],
  favouriteHeroes: [0, 2],
  openedComponent: DisplayComponentEnum.DASHBOARD,
};

export function reducer(state: State = initialState, action: UiActions.All): State {
  switch (action.type) {
    case UiActions.UiActionTypes.SetHeroesList:
      return {
        ...state,
        heroesList: action.payload,
      };
    case UiActions.UiActionTypes.SetFavouriteHeroes:
      return {
        ...state,
        favouriteHeroes: action.payload,
      };
    case UiActions.UiActionTypes.SetHeroName:
      const newHeroesList = JSON.parse(JSON.stringify(state.heroesList));
      newHeroesList.map(a => {
        if (a.id === action.heroId) {
          a.name = action.payload;
        }
        return a;
      });
      return {
        ...state,
        heroesList: newHeroesList,
      };
    case UiActionTypes.OpenDasboardOrList:
      return {
        ...state,
        openedComponent: action.payload,
      };
    case UiActions.UiActionTypes.AddHero:
      return {
        ...state,
        heroesList: [...state.heroesList, action.payload],
      };
    case UiActions.UiActionTypes.DeleteHero:
      return {
        ...state,
        heroesList: state.heroesList.filter(a => a.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
}

export const getHeroesList = (state: State) => state.heroesList;
export const getFavouriteHeroes = (state: State) => state.favouriteHeroes;
export const getOpenedComponent = (state: State) => state.openedComponent;
