import {FILTER_DEFAULT} from "../const";

export const getNormalizeDate = (date, options) => {
  const normalDate = new Date(date);
  return normalDate.toLocaleDateString(`en-EN`, options);
};

export const getFilmRunTime = (num) => {
  return `${Math.floor(num / 60)}:${num % 60}`;
};

export const getStarring = (starring) => {
  return starring.map((item, index) => index !== starring.length - 1 ? `${item}, ` : item);
};

export const prepareFilmsByGenre = ({films, genre}) => {
  return genre !== FILTER_DEFAULT ? films.filter((item) => item.genre === genre) : films;
};

const renameObjectKeys = (data) => {
  let newObject = {};
  let newKey = ``;

  for (const [key, value] of Object.entries(data)) {
    if (key.includes(`_`)) {
      newKey = key
        .split(`_`)
        .map((item, index) => index !== 0 ? item[0].toUpperCase() + item.slice(1) : item)
        .join(``);
    } else if (key === `id`) {
      newKey = `itemId`;
    } else {
      newKey = key;
    }

    newObject[newKey] = value;
  }

  return newObject;
};

export const getNormalizeData = (data) => {
  if (Array.isArray(data)) {
    const newData = [...data];
    return newData.map((item) => renameObjectKeys(item));
  } else {
    return renameObjectKeys(data);
  }
};
