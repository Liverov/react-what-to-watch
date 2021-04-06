import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import AddReviewForm from '../add-review-form/add-review-form';
import {fetchFilm} from "../../store/api-actions";


const AddReviewScreen = () => {
  const {id} = useParams();

  const {filmData, isFilmLoaded} = useSelector((state) => state.FILM_DATA.film);
  const {
    itemId,
    backgroundImage,
    name,
    posterImage
  } = filmData;

  const dispatch = useDispatch();
  if (!isFilmLoaded) {
    dispatch(fetchFilm(id));
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="page-header">
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${itemId}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <Avatar />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

export default AddReviewScreen;
