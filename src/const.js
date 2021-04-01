export const SetAuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const LimitCommentLength = {
  MIN: 50,
  MAX: 400
};

export const CommentFormTextErrorMessage = {
  MIN_CHARS: `The text must be more than ${LimitCommentLength.MIN} characters!`,
  MAX_CHARS: `Text must be less than  ${LimitCommentLength.MAX} characters!`
};

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
  LOGIN: `/login`,
  LOGOUT: `/logout`
};
