import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api-actions";
import {Redirect} from "react-router-dom";

import Header from '../../layout/header';
import Footer from '../../layout/footer';
import {AppRoutes, SetAuthStatus} from "../../const";

const LoginScreen = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  const [error, setError] = useState({
    text: ``,
    code: 0
  });
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  if (authorizationStatus === SetAuthStatus.AUTH) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!validateEmail(loginRef.current.value)) {
      setError({
        text: `Please enter a valid email address`,
        code: 2
      });
      return;
    }

    if (!loginRef.current.value || !passwordRef.current.value) {
      setError({
        text: `We can’t recognize this email and password combination. Please try again.`,
        code: 1
      });
      return;
    }

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value
    }));

  };

  return (
    <div className="user-page">

      <Header setClassName="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        {error.code > 0 ? (<div className="sign-in__message"><p>{error.text}</p></div>) : ``}
        <form
          onSubmit={handleSubmit}
          action="#"
          className="sign-in__form"
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                style={error.code === 2 ? {border: `1px solid red`} : null}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default LoginScreen;
