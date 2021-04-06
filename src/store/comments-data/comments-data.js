import {ActionType} from "../actions";

const initialState = {
  comments: {
    commentsData: [],
    isCommentsLoaded: false,
    blockCommentForm: false,
    isErrorCommentForm: false
  },
};

const commentsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.BLOCK_COMMENT_FORM:
      return {
        ...state,
        comments: {
          ...state.comments,
          blockCommentForm: action.payload
        }
      };
    case ActionType.ERROR_COMMENT_FORM:
      return {
        ...state,
        comments: {
          ...state.comments,
          isErrorCommentForm: true
        }
      };
    default:
      return state;
  }
};

export {commentsData};
