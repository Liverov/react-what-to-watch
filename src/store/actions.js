export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SET_FILMS: `data/setFilms`,
  SET_FILM: `data/setFilm`,
  SET_PROMO_FILM: `data/setPromoFilm`,
  SET_COMMENTS: `data/setComments`,
  BLOCK_COMMENT_FORM: `data/blockCommentForm`,
  ERROR_COMMENT_FORM: `data/errorCommentForm`,
  SET_FAVORITE: `data/setFavorite`,
  UPDATE_FAVORITE: `data/updateFavorite`,
  SET_USER: `user/setUser`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `global/redirectToRoute`,
  SET_ERROR: `error/setError`,
};


export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const setFilms = (films) => ({
  type: ActionType.SET_FILMS,
  payload: films
});

export const setFilm = ({filmData, isFilmLoaded, isPromo}) => ({
  type: ActionType.SET_FILM,
  payload: {
    filmData,
    isFilmLoaded,
    isPromo
  }
});

export const setComments = (comments) => ({
  type: ActionType.SET_COMMENTS,
  payload: comments
});

export const blockCommentForm = (status) => ({
  type: ActionType.BLOCK_COMMENT_FORM,
  payload: status
});

export const setErrorCommentForm = () => ({
  type: ActionType.ERROR_COMMENT_FORM
});

export const setFavorite = (favorite) => ({
  type: ActionType.SET_FAVORITE,
  payload: favorite
});

export const updateFavorite = ({status, isPromo}) => ({
  type: ActionType.UPDATE_FAVORITE,
  payload: {
    status,
    isPromo
  }
});

export const setUser = (user) => ({
  type: ActionType.SET_USER,
  payload: user
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setError = (error) => ({
  type: ActionType.SET_ERROR,
  payload: error
});

