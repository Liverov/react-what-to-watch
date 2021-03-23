import PropTypes, {shape} from 'prop-types';

export const filmsPropType = PropTypes.array;

export const filmPropType = PropTypes.shape({
  filmId: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.array,
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool
});

export const reviewsPropType = PropTypes.shape({
  id: PropTypes.number,
  user: shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string
});

export const genrePropType = PropTypes.string;
export const changeGenrePropType = PropTypes.func.isRequired;
export const countCardsHandlerPropType = PropTypes.func.isRequired;
