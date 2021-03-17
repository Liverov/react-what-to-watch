import {FILTER_DEFAULT} from "../const";

export const getRandomInt = ({min = 0, max}) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getNormalizeTime = (num) => {
  return `${Math.floor(num / 60)}:${num % 60}`;
};

export const prepareFilmsByGenre = ({films, genre}) => {
  return genre !== FILTER_DEFAULT ? films.filter((item) => item.genre === genre) : films;
};
