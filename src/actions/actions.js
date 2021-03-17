export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`
};

export const ActionCreator = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  }
};
