import {NameSpace} from "../root-reducer";
import {createSelector} from "reselect";
import {COUNT_RELATED_CARDS, FILTER_DEFAULT} from "../../const";

export const getFilmData = (state) => state[NameSpace.FILM_DATA].film;
export const getFilmsData = (state) => state[NameSpace.FILMS_DATA].films;
export const getGenre = (state) => state[NameSpace.GENRE].genre;

export const getFilmsByGenreSelector = createSelector(
    getFilmsData,
    getGenre,
    (films, genre) => {
      return genre !== FILTER_DEFAULT ? films.filmsData.filter((item) => item.genre === genre) : films.filmsData;
    }
);

export const getOriginalGenresSelector = createSelector(
    getFilmsData,
    (films) => {
      return [FILTER_DEFAULT, ...new Set(films.filmsData.map((film) => film.genre))];
    }
);

export const getRelatedFilmsSelector = createSelector(
    getFilmData,
    getFilmsData,
    (film, films) => {
      return films.filmsData.filter((item) => item.genre === film.filmData.genre).slice(0, COUNT_RELATED_CARDS);
    }
);

