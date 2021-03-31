export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  SET_FILM: `data/loadFilm`,
  LOAD_PROMO_FILM: `data/loadFilmsPromo`,
  SET_COMMENTS: `data/setComments`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `global/redirectToRoute`,
};

export const ActionCreator = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  setFilm: (film) => {
    return {
      type: ActionType.SET_FILM,
      payload: film
    };
  },
  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm
    };
  },
  setComments: (comments) => {
    return {
      type: ActionType.SET_COMMENTS,
      payload: comments
    };
  },
  requiredAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
