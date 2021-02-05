import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

let movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  promoDate: 2014
};

ReactDOM.render(
    <App movie={movie} />,
    document.querySelector(`#root`)
);
