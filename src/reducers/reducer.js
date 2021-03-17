import {ActionType} from "../actions/actions";
import films from '../mocks/films';

const initialState = {
  genre: `All genres`,
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
