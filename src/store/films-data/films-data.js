import {ActionType} from "../actions";

const initialState = {
  films: {
    filmsData: [],
    isFilmsLoaded: false,
  },
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: action.payload
      };
    default:
      return state;
  }
};

export {filmsData};
