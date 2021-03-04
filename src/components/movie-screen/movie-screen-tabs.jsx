import React, {useState} from 'react';
import {filmPropType} from '../../props';

import MovieScreenOverview from './movie-screen-overview/movie-screen-overview';
import MovieScreenDetails from './movie-screen-details/movie-screen-details';
import MovieScreenReviews from './movie-screen-reviews/movie-screen-reviews';

const Tabs = ({film}) => {
  const [tab, setTab] = useState(`overview`);
  const getScreen = () => {
    switch (tab) {
      case `details`: return <MovieScreenDetails film={film} />;
      case `reviews`: return <MovieScreenReviews film={film} />;
      default: return <MovieScreenOverview film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${tab === `overview` ? `movie-nav__item--active` : ``}`}>
            <a onClick={() => setTab(`overview`)} className="movie-nav__link">Overview</a>
          </li>
          <li className={`movie-nav__item ${tab === `details` ? `movie-nav__item--active` : ``}`}>
            <a onClick={() => setTab(`details`)} className="movie-nav__link">Details</a>
          </li>
          <li className={`movie-nav__item ${tab === `reviews` ? `movie-nav__item--active` : ``}`}>
            <a onClick={() => setTab(`reviews`)} className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      {getScreen(tab)}
    </div>
  );
};

Tabs.propTypes = {
  film: filmPropType
};

export default Tabs;
