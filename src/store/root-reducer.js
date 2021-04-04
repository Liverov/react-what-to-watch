import {combineReducers} from "redux";
import {genre} from "./genre/genre";
import {user} from "./user/user";
import {filmsData} from "./films-data/films-data";
import {filmData} from "./film-data/film-data";
import {commentsData} from "./comments-data/comments-data";
import {favoriteData} from "./favorite-data/favorite-data";

export const NameSpace = {
  GENRE: `GENRE`,
  USER: `USER`,
  FILMS_DATA: `FILMS_DATA`,
  FILM_DATA: `FILM_DATA`,
  COMMENTS_DATA: `COMMENTS_DATA`,
  FAVORITE_DATA: `FAVORITE_DATA`,
};

export default combineReducers({
  [NameSpace.GENRE]: genre,
  [NameSpace.USER]: user,
  [NameSpace.FILMS_DATA]: filmsData,
  [NameSpace.FILM_DATA]: filmData,
  [NameSpace.COMMENTS_DATA]: commentsData,
  [NameSpace.FAVORITE_DATA]: favoriteData,
});
