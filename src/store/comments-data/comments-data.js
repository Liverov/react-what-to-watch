import {ActionType} from "../actions";

const initialState = {
  comments: {
    commentsData: [],
    isCommentsLoaded: false
  },
};

const commentsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};

export {commentsData};
