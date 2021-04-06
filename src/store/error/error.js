import {ActionType} from "../actions";

const initialState = {
  error: ``
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default: return state;
  }
};

export {error};
