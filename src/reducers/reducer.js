import {ActionType} from "../actions/actions";
import films from '../mocks/films';
import {FILTER_DEFAULT} from "../const";

const initialState = {
  genre: FILTER_DEFAULT,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default: return state;
  }
};

export {reducer};
