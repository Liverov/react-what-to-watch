import React, {useState} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {filmsPropType} from '../../props';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import MovieCard from '../movie-card/movie-card';
import MovieScreenOverview from './movie-screen-overview';
import MovieScreenDetails from './movie-screen-details';
import MovieScreenReviews from './movie-screen-reviews';
import Footer from '../../layout/footer';

const MovieScreen = ({films}) => {
  const {id} = useParams();
  const history = useHistory();
  let [tab, setTab] = useState(`overview`);

  const switchTab = () => {
    switch (tab) {
      case `details`: return <MovieScreenDetails film={films[id]} />;
      case `reviews`: return <MovieScreenReviews film={films[id]} />;
      default: return <MovieScreenOverview film={films[id]} />;
    }
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={films[id].background_image} alt={films[id].name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header setClassName="movie-card__head">
            <Avatar />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{films[id].name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{films[id].genre}</span>
                <span className="movie-card__year">{films[id].released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => history.push(`/player/${films[id].id}`)}
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
                <Link
                  to={`/films/${films[id].id}/review`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={films[id].poster_image} alt={films[id].name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={`movie-nav__item ${tab === `overview` ? `movie-nav__item--active` : ``}`}>
                    <a onClick={() => setTab(tab = `overview`)} className="movie-nav__link">Overview</a>
                  </li>
                  <li className={`movie-nav__item ${tab === `details` ? `movie-nav__item--active` : ``}`}>
                    <a onClick={() => setTab(tab = `details`)} className="movie-nav__link">Details</a>
                  </li>
                  <li className={`movie-nav__item ${tab === `reviews` ? `movie-nav__item--active` : ``}`}>
                    <a onClick={() => setTab(tab = `reviews`)} className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              {switchTab(tab)}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {films.filter((film) => films[id].genre === film.genre).map((film) => {
              return <MovieCard key={film.id} film={film} />;
            })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

MovieScreen.propTypes = {
  films: filmsPropType
};

export default MovieScreen;
