import {FILTER_DEFAULT} from "../../const";
import {ActionType} from "../actions";

const initialState = {
  genre: FILTER_DEFAULT
};

const genre = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default:
      return state;
  }
};

export {genre};
