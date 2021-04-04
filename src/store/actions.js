export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SET_FILMS: `data/setFilms`,
  SET_FILM: `data/setFilm`,
  SET_PROMO_FILM: `data/setPromoFilm`,
  SET_COMMENTS: `data/setComments`,
  SET_FAVORITE: `data/setFavorite`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `global/redirectToRoute`,
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

export const setFavorite = (favorite) => ({
  type: ActionType.SET_FAVORITE,
  payload: favorite
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

