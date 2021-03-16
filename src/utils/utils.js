export const getRandomInt = ({min = 0, max}) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getNormalizeTime = (num) => {
  return `${Math.floor(num / 60)}:${num % 60}`;
};
