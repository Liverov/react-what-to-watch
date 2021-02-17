import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {filmsPropType} from '../../props';

import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  const {films} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen films={films} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen films={films} />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen films={films} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen films={films} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen films={films} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: filmsPropType
};

export default App;
