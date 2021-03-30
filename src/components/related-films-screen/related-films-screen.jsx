import React, {useEffect} from "react";
import {connect} from "react-redux";
import {COUNT_RELATED_CARDS} from "../../const";
import {filmsPropType, genrePropType, onLoadDataPropType} from "../../types";
import {fetchFilms} from "../../api-actions";

import MovieCard from "../movie-card/movie-card";
import Loader from "../loader/loader";


const RelatedFilmsScreen = ({films, genre, onLoadData}) => {
  const {filmsData, isFilmsLoaded} = films;
  const getRelatedFilms = filmsData.filter((relatedFilm) => genre === relatedFilm.genre).slice(0, COUNT_RELATED_CARDS);

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadData();
    }
  }, []);

  if (!isFilmsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {
          getRelatedFilms.map((film) => <MovieCard key={film.itemId} film={film} />)
        }
      </div>
    </section>
  );
};

RelatedFilmsScreen.propTypes = {
  films: filmsPropType,
  genre: genrePropType,
  onLoadData: onLoadDataPropType
};

const mapStateToProps = ({films}) => ({films});
const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilms());
  }
});
export {RelatedFilmsScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RelatedFilmsScreen);
