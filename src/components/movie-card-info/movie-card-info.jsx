import React, {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {filmPropType, childrenPropType} from "../../types";
import PropTypes from "prop-types";
import {fetchSetFavorite} from "../../store/api-actions";
import {AppRoutes, SetAuthStatus} from "../../const";

const MovieCardInfo = ({film, children, isPromo}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {authorizationStatus} = useSelector((state) => state.USER);
  const [redirect, setRedirect] = useState(false);
  const {
    name,
    genre,
    released,
    itemId,
    isFavorite
  } = film;

  const setFetchFavorite = () => {
    if (authorizationStatus === SetAuthStatus.NO_AUTH) {
      setRedirect(true);
    }
    dispatch(fetchSetFavorite(itemId, !isFavorite, isPromo));
  };

  if (redirect) {
    return <Redirect to={AppRoutes.LOGIN} />;
  }
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
          onClick={setFetchFavorite}
          className="btn btn--list movie-card__button"
          type="button"
        >
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
