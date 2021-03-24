import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {connect} from "react-redux";

import {filmsPropType} from '../../types';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import Tabs from './movie-screen-tabs';
import MovieCardInfo from '../movie-card-info/movie-card-info';
import RelatedFilmsScreen from "../related-films-screen/related-films-screen";
import Footer from '../../layout/footer';

const MovieScreen = ({films}) => {
  const {id} = useParams();

  const {
    filmId,
    name,
    genre,
    posterImage,
    backgroundImage
  } = films[id];

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
            <MovieCardInfo film={films[id]}>
              <Link
                to={`/films/${filmId}/review`}
                className="btn movie-card__button"
              >
                Add review
              </Link>
            </MovieCardInfo>
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
        <RelatedFilmsScreen genre={genre} />

        <Footer />
      </div>
    </>
  );
};

MovieScreen.propTypes = {
  films: filmsPropType
};

const mapStateToProps = ({films}) => ({films});

export {MovieScreen};
export default connect(mapStateToProps, null)(MovieScreen);
