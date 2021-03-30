import {ActionType} from "../actions/actions";
import {FILTER_DEFAULT} from "../const";

const initialState = {
  genre: FILTER_DEFAULT,
  films: {
    filmsData: [],
    isLoaded: false,
  },
  film: {
    filmData: {},
    isLoaded: false
  },
  promoFilm: {
    promoFilmData: {},
    isLoaded: false
  },
  comments: {
    commentsData: [],
    isLoaded: false
  }
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
    case ActionType.LOAD_FILM:
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
    case ActionType.RESET_FILM:
      return {
        ...state,
        film: initialState.film
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: {
          commentsData: action.payload,
          isCommentsLoaded: true
        }
      };
    case ActionType.RESET_COMMENTS:
      return {
        ...state,
        comments: initialState.comments
      };
    default: return state;
  }
};

export {reducer};
