import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  filmsPropType,
  changeGenrePropType,
  genrePropType,
  resetCountCardsPropType,
} from "../../types";
import {FILTER_DEFAULT} from '../../const';

import {ActionCreator} from "../../actions/actions";

const GenresList = ({films, changeGenre, resetCountCards, genre}) => {
  const originalGenres = [FILTER_DEFAULT, ...new Set(films.map((film) => film.genre))];

  useEffect(() => {
    return () => {
      resetCountCards();
    };
  }, [genre]);

  return (
    <ul className="catalog__genres-list">
      {
        originalGenres.map((item) => (
          <li key={item} className="catalog__genres-item">
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => item === FILTER_DEFAULT ? changeGenre(FILTER_DEFAULT) : changeGenre(item)}
            >
              {item}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

GenresList.propTypes = {
  films: filmsPropType,
  changeGenre: changeGenrePropType,
  genre: genrePropType,
  resetCountCards: resetCountCardsPropType
};

const mapStateToProps = ({films, genre}) => ({films, genre});
const mapDispatchToProps = (dispatch) => ({
  changeGenre(item) {
    dispatch(ActionCreator.changeGenre(item));
  },
  resetCountCards() {
    dispatch(ActionCreator.resetCountCards());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

