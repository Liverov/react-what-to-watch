import {SetAuthStatus} from "../../const";
import {ActionType} from "../actions";

const initialState = {
  authorizationStatus: SetAuthStatus.NO_AUTH
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default: return state;
  }
};

export {user};


