import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {filmPropType} from '../../types';

import Player from '../player/player';

const MovieCardSmall = ({film}) => {
  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div
          onMouseEnter={() => setIsPlaying(true)}
          onMouseOut={() => setIsPlaying(false)}
          onClick={() => history.push(`/films/${film.filmId}`)}
          className="small-movie-card__image"
        >
          <Player film={film} isPlaying={isPlaying} />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${film.filmId}`}
            className="small-movie-card__link"
          >
            {film.name}
          </Link>
        </h3>
      </article>
    </>
  );
};

MovieCardSmall.propTypes = {
  film: filmPropType
};

export default MovieCardSmall;
