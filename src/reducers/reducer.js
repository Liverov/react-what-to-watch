import {ActionType} from "../actions/actions";
import {FILTER_DEFAULT, SetAuthStatus} from "../const";

const initialState = {
  genre: FILTER_DEFAULT,
  films: {
    filmsData: [],
    isFilmsLoaded: false,
  },
  film: {
    filmData: {},
    isFilmLoaded: false
  },
  promoFilm: {
    promoFilmData: {},
    isPromoFilmLoaded: false
  },
  comments: {
    commentsData: [],
    isCommentsLoaded: false
  },
  authorizationStatus: SetAuthStatus.NO_AUTH
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: {
          filmsData: action.payload,
          isFilmsLoaded: true,
        }
      };
    case ActionType.SET_FILM:
      return {
        ...state,
        film: {
          filmData: action.payload,
          isFilmLoaded: true,
        }
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: {
          promoFilmData: action.payload,
          isPromoFilmLoaded: true,
        }
      };
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: {
          commentsData: action.payload,
          isCommentsLoaded: true
        }
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default: return state;
  }
};

export {reducer};
