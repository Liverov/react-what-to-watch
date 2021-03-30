export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_PROMO_FILM: `data/loadFilmsPromo`,
  RESET_FILM: `data/resetFilm`,
  LOAD_COMMENTS: `data/loadComments`,
  RESET_COMMENTS: `data/resetComments`
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
  loadFilm: (film) => {
    return {
      type: ActionType.LOAD_FILM,
      payload: film
    };
  },
  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm
    };
  },
  resetFilm: () => {
    return {
      type: ActionType.RESET_FILM
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },
  resetComments: () => {
    return {
      type: ActionType.RESET_COMMENTS,
    };
  }
};
