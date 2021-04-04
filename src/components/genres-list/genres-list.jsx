import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FILTER_DEFAULT} from '../../const';
import {changeGenre} from "../../store/actions";

const GenresList = () => {
  const {filmsData} = useSelector((store) => store.FILMS_DATA.films);
  const originalGenres = [FILTER_DEFAULT, ...new Set(filmsData.map((film) => film.genre))];
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        originalGenres.map((item) => (
          <li key={item} className="catalog__genres-item">
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => item === FILTER_DEFAULT ? dispatch(changeGenre(FILTER_DEFAULT)) : dispatch(changeGenre(item))}
            >
              {item}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default GenresList;

