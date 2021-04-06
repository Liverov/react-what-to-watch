import PropTypes from 'prop-types';

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
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  }),
  isLoaded: PropTypes.bool
});

export const countCardsHandlerPropType = PropTypes.func.isRequired;
export const childrenPropType = PropTypes.element;
