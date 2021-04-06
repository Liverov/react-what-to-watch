import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {SetAuthStatus} from '../../const';
import {AppRoutes} from "../../const";
import {getUserSelector} from "../../store/user/selectors";
import {getFilmsData} from "../../store/films-data/selectors";
import Loader from "../loader/loader";
const PrivateRoute = ({render, path, exact}) => {

  const {authorizationStatus} = useSelector(getUserSelector);

  const {isFilmsLoaded} = useSelector(getFilmsData);

  if (!isFilmsLoaded) {
    return (
      <Loader/>
    );
  }
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === SetAuthStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoutes.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
