export const SetAuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const DefaultRating = {
  BAD: {
    text: `Bad`,
    maxCount: 3
  },
  NORMAL: {
    text: `Normal`,
    maxCount: 5,
  },
  GOOD: {
    text: `Good`,
    maxCount: 8,
  },
  VERY_GOOD: {
    text: `Very good`,
    maxCount: 10,
  },
  AWESOME: {
    text: `Awesome`,
  }
};

export const ADD_TO_FAVORITE_STATUS = 1;
export const REMOVE_FROM_FAVORITE_STATUS = 0;

export const DEFAULT_MAX_LENGTH_COMMENT = 400;
export const DEFAULT_MIN_LENGTH_COMMENT = 50;
export const COMMENT_LENGTH_ERROR = `The text must be more than ${DEFAULT_MIN_LENGTH_COMMENT} characters!`;

export const COUNT_RELATED_CARDS = 4;
export const COUNT_MAIN_PAGE_CARDS = 8;
export const FILTER_DEFAULT = `All genres`;

export const AppRoutes = {
  ROOT: `/`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  MY_LIST: `/myList`,
  MOVIE_SCREEN: `/films/:id`,
  ADD_REVIEW_SCREEN: `/films/:id/review`,
  PLAYER_SCREEN: `/player/:id`
};

export const APIRoutes = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`
};
