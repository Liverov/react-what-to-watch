export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  RESET_GENRE: `films/resetGenre`,
  GET_FILMS_BY_GENRE: `films/getFilmsByGenre`
};

export const ActionReducer = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  // getFilmsByGenre: (films, genre) => {
  //   return {
  //     type: ActionType.GET_FILMS_BY_GENRE,
  //     payload: genre !== `All genres` ? films.filter((item) => item.genre === genre) : films
  //   };
  // }
};
