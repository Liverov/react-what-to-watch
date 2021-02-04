import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  promoDate: 2014
};

ReactDOM.render(
    <App movie={Movie} />,
    document.querySelector(`#root`)
);
