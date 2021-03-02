import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../layout/header';
import Footer from '../../layout/footer';

const NotFoundScreen = () => {
  return (
    <div className="user-page">
      <Header setClassName="user-page__head" />

      <div className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <p><Link to='/'>Return to main page</Link></p>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundScreen;
