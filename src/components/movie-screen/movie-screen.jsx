import React, {useState, useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {filmsPropType} from '../../props';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import MovieCard from '../movie-card/movie-card';
import Tabs from './movie-screen-tabs';
import Footer from '../../layout/footer';

import films from '../../mocks/films';

const MovieScreen = () => {
  const {id} = useParams();
  const history = useHistory();
  const [film, setFilm] = useState({});

  const {
    filmId,
    name,
    genre,
    released,
    posterImage,
    backgroundImage
  } = film;

  useEffect(() => {
    setFilm(films[id]);
  }, []);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header setClassName="movie-card__head">
            <Avatar />
          </Header>

          <div className="movie-card__wrap">
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
                <Link
                  to={`/films/${filmId}/review`}
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
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <Tabs film={films[id]} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {films.filter((relatedFilm) => genre === relatedFilm.genre).map((relatedFilm) => <MovieCard key={relatedFilm.filmId} film={relatedFilm} />)}
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
