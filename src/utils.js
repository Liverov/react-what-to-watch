import {DEFAULT_SECONDS, DefaultRating} from "./const";

export const getNormalizeDate = (date, options) => {
  const normalDate = new Date(date);
  return normalDate.toLocaleDateString(`en-EN`, options);
};

export const getRunTime = (num) => {
  let hours = Math.floor(num / 60);
  let minutes = Math.floor(num % 60);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
};

export const getProgressTime = (currentTime, runTime) => {
  return currentTime / (runTime * 60) * 100;
};

export const getSeconds = (seconds) => {
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = DEFAULT_SECONDS;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return seconds;
};

export const getCurrentTime = (currentTime) => {
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = `0` + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = `0` + seconds;
  } else {
    secondValue = seconds;
  }

  return minuteValue + `:` + secondValue;
};

export const getStarring = (starring) => {
  return starring.map((item, index) => index !== starring.length - 1 ? `${item}, ` : item);
};

export const ratingToText = (ratingCount) => {
  if (ratingCount < DefaultRating.BAD.maxCount) {
    return DefaultRating.BAD.text;
  } else if (ratingCount < DefaultRating.NORMAL.maxCount) {
    return DefaultRating.NORMAL.text;
  } else if (ratingCount < DefaultRating.GOOD.maxCount) {
    return DefaultRating.GOOD.text;
  } else if (ratingCount < DefaultRating.VERY_GOOD.maxCount) {
    return DefaultRating.VERY_GOOD.text;
  } else {
    return DefaultRating.AWESOME.text;
  }
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
