import PropTypes, {shape} from 'prop-types';

export const filmsPropType = PropTypes.shape({
  data: PropTypes.array,
  isLoaded: PropTypes.bool
});

export const filmPropType = PropTypes.shape({
  data: PropTypes.shape({
    itemId: PropTypes.number,
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
  }),
  isLoaded: PropTypes.bool
});

export const commentsPropType = PropTypes.shape({
  id: PropTypes.number,
  user: shape({
    itemId: PropTypes.number,
    name: PropTypes.string
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string
});

export const genrePropType = PropTypes.string;
export const changeGenrePropType = PropTypes.func.isRequired;
export const countCardsHandlerPropType = PropTypes.func.isRequired;
export const onLoadDataPropType = PropTypes.func.isRequired;
export const childrenPropType = PropTypes.element;
