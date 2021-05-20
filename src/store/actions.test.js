import {
  changeGenre,
  setFilms,
  ActionType,
} from "./actions";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeGenre returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `All genres`
    };

    expect(changeGenre(`All genres`)).toEqual(expectedAction);
  });

  it(`Action creator for setFilms returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FILMS,
      payload: [
        {
          name: `Correct`,
          description: ``,
          rating: ``,
          director: ``
        },
        {
          name: `Correct 2`,
          description: ``,
          rating: ``,
          director: ``
        },
        {
          name: `Correct 3`,
          description: ``,
          rating: ``,
          director: ``
        },
      ]
    };

    const films = [
      {
        name: `Correct`,
        description: ``,
        rating: ``,
        director: ``
      },
      {
        name: `Correct 2`,
        description: ``,
        rating: ``,
        director: ``
      },
      {
        name: `Correct 3`,
        description: ``,
        rating: ``,
        director: ``
      },
    ];

    expect(setFilms(films)).toEqual(expectedAction);
  });


});
