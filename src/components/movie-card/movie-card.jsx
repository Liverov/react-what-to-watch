import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {filmPropType} from '../../types';

import Player from '../player/player';

const MovieCard = ({film}) => {
  const {itemId, name} = film;

  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div
          onMouseEnter={() => setIsPlaying(true)}
          onMouseOut={() => setIsPlaying(false)}
          onClick={() => history.push(`/films/${itemId}`)}
          className="small-movie-card__image"
        >
          <Player film={film} isPlaying={isPlaying} isPreviewVideo={true} />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${itemId}`}
            className="small-movie-card__link"
          >
            {name}
          </Link>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {
  film: filmPropType
};

export default React.memo(MovieCard);
