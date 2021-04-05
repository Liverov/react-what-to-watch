import {
  setFilms,
  setFilm,
  setComments,
  requiredAuthorization,
  redirectToRoute,
  setFavorite,
  updateFavorite
} from "./actions";
import {getNormalizeData} from "../utils";
import {SetAuthStatus} from "../const";
import {APIRoutes} from "../const";
import {AppRoutes} from "../const";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FILMS)
    .then(({data}) => {
      dispatch(setFilms({
        filmsData: getNormalizeData(data),
        isFilmsLoaded: true
      }));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.FILMS}/${id}`)
    .then(({data}) => dispatch(setFilm(
        {
          filmData: getNormalizeData(data),
          isFilmLoaded: true,
          isPromo: false
        }
    )))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.PROMO_FILM)
    .then(({data}) => dispatch(setFilm(
        {
          filmData: getNormalizeData(data),
          isFilmLoaded: true,
          isPromo: true
        }
    )))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(setComments({
        commentsData: getNormalizeData(data),
        isCommentsLoaded: true,
      }));
    })
);

export const fetchSetComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`${APIRoutes.FILMS}/${id}`));
    })
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FAVORITE)
    .then(({data}) => {
      dispatch(setFavorite({
        favoriteData: getNormalizeData(data),
        isFavoriteDataLoading: true
      }));
    })
);

export const fetchSetFavorite = (itemId, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.FAVORITE}/${itemId}/${Number(status)}`)
    .then(() => {
      status = Boolean(status);
      dispatch(updateFavorite({status, isPromo}));
    })
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => {
      dispatch(requiredAuthorization(SetAuthStatus.AUTH));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(() => {
      dispatch(requiredAuthorization(SetAuthStatus.AUTH));
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoutes.ROOT));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGOUT)
    .then(() => {
      dispatch(requiredAuthorization(SetAuthStatus.NO_AUTH));
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoutes.ROOT));
    })
);
