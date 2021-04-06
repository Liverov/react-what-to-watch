import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {redirect} from "./store/middlewares/redirect";
import reducer from './store/root-reducer';
import {createAPI} from "./api";
import {checkAuth} from "./store/api-actions";
import {AppRoutes, SetAuthStatus, SetErrors} from "./const";
import {redirectToRoute, requiredAuthorization, setError} from "./store/actions";

import App from './components/app/app';


const api = createAPI(
    () => store.dispatch(requiredAuthorization(SetAuthStatus.NO_AUTH)),
    () => {
      store.dispatch(setError(SetErrors.ERROR_CONNECTION));
      store.dispatch(redirectToRoute(AppRoutes.ERROR_SERVER_SCREEN));
    }
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect))
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`),
);
