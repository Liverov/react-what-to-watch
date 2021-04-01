import {ActionCreator} from "./actions/actions";
import {getNormalizeData} from "./utils/utils";
import {SetAuthStatus} from "./const";
import {APIRoutes} from "./const";
import {AppRoutes} from "./const";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(getNormalizeData(data)));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setFilm(
          {
            filmData: getNormalizeData(data),
            isFilmLoaded: true,
            isPromo: false
          }
      ));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.PROMO_FILM)
    .then(({data}) => {
      dispatch(ActionCreator.setFilm(
          {
            filmData: getNormalizeData(data),
            isFilmLoaded: true,
            isPromo: true
          }
      ));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setComments(getNormalizeData(data)));
    })
);

export const setComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(ActionCreator.setComments(getNormalizeData(data)));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${APIRoutes.FILMS}/${id}`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requiredAuthorization(SetAuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(SetAuthStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGOUT)
    .then(() => dispatch(ActionCreator.requiredAuthorization(SetAuthStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT)))
);
