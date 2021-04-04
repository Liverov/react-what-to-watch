import {ActionType} from "../actions";

const initialState = {
  favorite: {
    favoriteData: [],
    isFavoriteDataLoading: false
  }
};

const favoriteData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FAVORITE:
      return {
        ...state,
        favorite: action.payload
      };
    default:
      return state;
  }
};

export {favoriteData};
