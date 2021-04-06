export const SetAuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const MovieScreenTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  OK: 200,
  SERVER_ERROR: 500
};

export const DefaultLengthComment = {
  MIN: 50,
  MAX: 400
};

export const SetErrors = {
  LOGIN_ERROR: `Please enter a valid email address`,
  PASSWORD_ERROR: `Please enter a valid password`,
  COMBINATION_ERROR: `We can’t recognize this email and password combination. Please try again.`,
  ERROR_CONNECTION: `SERVER IS NOT AVAILABLE`,
  COMMENT_LENGTH_ERROR: `The text must be more than ${DefaultLengthComment.MIN} characters!`
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

export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_SECONDS = 60;
export const COUNT_RELATED_CARDS = 4;
export const COUNT_MAIN_PAGE_CARDS = 8;
export const FILTER_DEFAULT = `All genres`;

export const AppRoutes = {
  ROOT: `/`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  MY_LIST: `/mylist`,
  MOVIE_SCREEN: `/films/:id`,
  ADD_REVIEW_SCREEN: `/films/:id/review`,
  PLAYER_SCREEN: `/player/:id`,
  ERROR_SERVER_SCREEN: `/errorserver`
};

export const APIRoutes = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  BACKEND_URL: `https://6.react.pages.academy/wtw`
};
