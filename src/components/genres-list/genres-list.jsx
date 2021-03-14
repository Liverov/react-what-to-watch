import React from 'react';
import {connect} from 'react-redux';
import {filmsPropType, changeGenrePropType, resetGenrePropType} from "../../props";

import * as actions from "../../actions/actions";

const GenresList = ({films, changeGenre, resetGenre}) => {
  const originalGenres = [...new Set(films.map((film) => film.genre))];

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item">
        <a
          href="#"
          className="catalog__genres-link"
          onClick={() => resetGenre()}
        >
          All genres
        </a>
      </li>
      {
        originalGenres.map((item) => {
          return <li key={item} className="catalog__genres-item">
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => changeGenre(item)}
            >
              {item}
            </a>
          </li>;
        })
      }
    </ul>
  );
};

GenresList.propTypes = {
  films: filmsPropType,
  changeGenre: changeGenrePropType,
  resetGenre: resetGenrePropType
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films
});

export {GenresList};
export default connect(mapStateToProps, actions)(GenresList);

