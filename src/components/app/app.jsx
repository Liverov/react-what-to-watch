import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen {...props} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
