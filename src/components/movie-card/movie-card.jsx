import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {filmPropType} from '../../props';

import Player from '../player/player';

const MovieCard = ({film}) => {
  const history = useHistory();
  let [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div
          onMouseEnter={() => setIsPlaying(isPlaying = true)}
          onMouseOut={() => setIsPlaying(isPlaying = false)}
          onClick={() => history.push(`/films/` + film.id)}
          className="small-movie-card__image"
        >
          {isPlaying ?
            <Player film={film} isPlaying={isPlaying}/>
            :
            <img
              src={film.preview_image}
              alt={film.name}
              width="280"
              height="175"
            />
          }
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/` + film.id}
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
