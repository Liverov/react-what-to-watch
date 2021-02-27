import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {filmsPropType} from '../../props';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';

import AddReviewForm from '../add-review-form/add-review-form';

const AddReviewScreen = ({films}) => {

  const {id} = useParams();

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={films[id].background_image} alt={films[id].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="page-header">
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${films[id].id}`} className="breadcrumbs__link">{films[id].name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <Avatar />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={films[id].poster_image} alt={`${films[id].name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

AddReviewScreen.propTypes = {
  films: filmsPropType
};

export default AddReviewScreen;
