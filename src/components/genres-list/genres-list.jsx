import React from 'react';
import {connect} from 'react-redux';
import {filmsPropType, changeGenrePropType} from "../../types";
import {FILTER_DEFAULT} from '../../const';

import {ActionCreator} from "../../actions/actions";

const GenresList = ({films, changeGenre}) => {
  const originalGenres = [FILTER_DEFAULT, ...new Set(films.map((film) => film.genre))];

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
  changeGenre: changeGenrePropType
};

const mapStateToProps = ({films}) => ({films});
const mapDispatchToProps = (dispatch) => ({
  changeGenre(item) {
    dispatch(ActionCreator.changeGenre(item));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

