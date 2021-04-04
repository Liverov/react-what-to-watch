import React, {useState, useEffect} from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {filmPropType, childrenPropType} from "../../types";
import PropTypes from "prop-types";
import {fetchPromoFilm, fetchSetFavorite} from "../../store/api-actions";
import {AppRoutes, ADD_TO_FAVORITE_STATUS, REMOVE_FROM_FAVORITE_STATUS, SetAuthStatus} from "../../const";

const MovieCardInfo = ({film, children, isPromo}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {authorizationStatus} = useSelector((state) => state.USER);
  const [route, setRoute] = useState(``);
  useEffect(() => {
    if (isPromo) {
      dispatch(fetchPromoFilm());
    }
  }, []);

  const {
    name,
    genre,
    released,
    itemId,
    isFavorite
  } = film;

  const onSetFavorite = () => {
    if (authorizationStatus === SetAuthStatus.NO_AUTH) {
      setRoute(AppRoutes.LOGIN);
    }
    if (isFavorite) {
      dispatch(fetchSetFavorite(itemId, REMOVE_FROM_FAVORITE_STATUS));
    } else {
      dispatch(fetchSetFavorite(itemId, ADD_TO_FAVORITE_STATUS));
    }
  };


  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <button
          onClick={() => history.push(`/player/${itemId}`)}
          className="btn btn--play movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button
          onClick={onSetFavorite}
          className="btn btn--list movie-card__button"
          type="button"
        >
          <Redirect to={route} />
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
          </svg>
          <span>My list</span>
        </button>
        {children}
      </div>
    </div>
  );
};

MovieCardInfo.propTypes = {
  film: filmPropType,
  children: childrenPropType,
  isPromo: PropTypes.bool
};

export default MovieCardInfo;
