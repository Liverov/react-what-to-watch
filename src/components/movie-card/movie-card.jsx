import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {filmPropType} from '../../props';

const MovieCard = ({film}) => {

  let [filmId, setFilmId] = useState(0);
  const history = useHistory();

  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div
          onMouseEnter={() => setFilmId(filmId = film.id)}
          onClick={() => history.push(`/films/` + film.id)}
          className="small-movie-card__image"
        >
          <img
            src={film.preview_image}
            alt={film.name}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/` + filmId}
            className="small-movie-card__link"
          >
            {film.name}
          </Link>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {
  film: filmPropType
};

export default MovieCard;
