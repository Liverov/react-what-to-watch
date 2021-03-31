import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from './components/app/app';
import {reducer} from './reducers/reducer';
import {createAPI} from "./api";

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`),
);
