import React from 'react';
import {
  Router as BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoutes} from "../../const";

import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Logout from "../logout/logout";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.MY_LIST}
          render={() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoutes.MOVIE_SCREEN}>
          <MovieScreen />
        </Route>
        <Route exact path={AppRoutes.ADD_REVIEW_SCREEN}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoutes.PLAYER_SCREEN}>
          <PlayerScreen />
        </Route>
        <Route exact path={AppRoutes.LOGOUT}>
          <Logout />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
