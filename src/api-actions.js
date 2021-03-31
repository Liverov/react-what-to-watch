import {ActionCreator} from "./actions/actions";
import {getNormalizeData} from "./utils/utils";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(getNormalizeData(data)));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setFilm(getNormalizeData(data)));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromoFilm(getNormalizeData(data)));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setComments(getNormalizeData(data)));
    })
);
