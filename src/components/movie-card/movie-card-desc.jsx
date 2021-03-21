import React from 'react';
import {useHistory} from "react-router-dom";

const movieCardDesc = ({name, genre, released, filmId, children}) => {
  const history = useHistory();
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <button
          onClick={() => history.push(`/player/${filmId}`)}
          className="btn btn--play movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button
          onClick={() => history.push(`/mylist/`)}
          className="btn btn--list movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default movieCardDesc;
