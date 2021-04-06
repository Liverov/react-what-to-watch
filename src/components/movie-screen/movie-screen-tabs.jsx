import React, {useState} from 'react';
import {MovieScreenTabs} from "../../const";

import MovieScreenOverview from './movie-screen-overview/movie-screen-overview';
import MovieScreenDetails from './movie-screen-details/movie-screen-details';
import MovieScreenReviews from './movie-screen-reviews/movie-screen-reviews';

const Tabs = () => {
  const [tab, setTab] = useState(MovieScreenTabs.OVERVIEW);

  const getScreen = () => {
    switch (tab) {
      case MovieScreenTabs.DETAILS: return <MovieScreenDetails />;
      case MovieScreenTabs.REVIEWS: return <MovieScreenReviews />;
      default: return <MovieScreenOverview />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            Object.values(MovieScreenTabs).map((tabItem) =>
              <li
                key={tabItem.toString()}
                className={`movie-nav__item ${tab === tabItem && `movie-nav__item--active`}`}
              >
                <a
                  style={{cursor: `pointer`}}
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

export default Tabs;
