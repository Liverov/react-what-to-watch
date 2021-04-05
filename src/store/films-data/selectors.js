import {NameSpace} from "../root-reducer";
import {createSelector} from "reselect";
import {FILTER_DEFAULT} from "../../const";

const getFilmsData = (state) => state[NameSpace.FILMS_DATA].films;
const getGenre = (state) => state[NameSpace.GENRE].genre;

export const getFilmsByGenre = createSelector(
    getFilmsData,
    getGenre,
    (films, genre) => {
      return genre !== FILTER_DEFAULT ? films.filmsData.filter((item) => item.genre === genre) : films.filmsData;
    }
);
