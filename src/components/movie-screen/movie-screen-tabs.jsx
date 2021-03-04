import React, {useState} from 'react';
import {filmPropType} from '../../props';

import MovieScreenOverview from './movie-screen-overview/movie-screen-overview';
import MovieScreenDetails from './movie-screen-details/movie-screen-details';
import MovieScreenReviews from './movie-screen-reviews/movie-screen-reviews';

const Tabs = ({film}) => {
  const [tab, setTab] = useState(`Overview`);

  const TABS = [
    `Overview`,
    `Details`,
    `Reviews`
  ];

  const getScreen = () => {
    switch (tab) {
      case `Details`: return <MovieScreenDetails film={film} />;
      case `Reviews`: return <MovieScreenReviews film={film} />;
      default: return <MovieScreenOverview film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            TABS.map((tabItem) =>
              <li
                key={tabItem.toString()}
                className={`movie-nav__item ${tab === tabItem && `movie-nav__item--active`}`}
              >
                <a
                  onClick={() => setTab(tabItem)}
                  className="movie-nav__link"
                >
                  {tabItem}
                </a>
              </li>
            )
          }
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
