import React from "react";
import {connect} from "react-redux";
import {CountCardsOnPage} from "../../const";
import MovieCardSmall from "../movie-card/movie-card-small";
import {filmsPropType, genrePropType} from "../../types";

const RelatedFilmsScreen = ({films, genre}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {
          films.filter((relatedFilm) => genre === relatedFilm.genre)
            .slice(0, CountCardsOnPage.RELATED)
            .map((film) => <MovieCardSmall key={film.filmId} film={film} />)
        }
      </div>
    </section>
  );
};

RelatedFilmsScreen.propTypes = {
  films: filmsPropType,
  genre: genrePropType
};

const mapStateToProps = ({films}) => ({films});

export {RelatedFilmsScreen};
export default connect(mapStateToProps, null)(RelatedFilmsScreen);
