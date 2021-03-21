export const ActionType = {
  CHANGE_GENRE: `films/changeGenre`,
  SHOW_MORE_CARDS: `films/showMoreCards`,
  RESET_COUNT_CARDS: `films/resetCountCards`
};

export const ActionCreator = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  showMoreCards: (count) => {
    return {
      type: ActionType.SHOW_MORE_CARDS,
      payload: count
    };
  },
  resetCountCards: () => {
    return {
      type: ActionType.RESET_COUNT_CARDS
    };
  }
};
