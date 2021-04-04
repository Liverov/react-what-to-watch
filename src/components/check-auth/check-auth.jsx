import React from 'react';
import {useSelector} from "react-redux";

import {SetAuthStatus} from "../../const";

import LoginButton from "../login-button/login-button";
import Avatar from "../avatar/avatar";

const CheckAuth = () => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  return (authorizationStatus === SetAuthStatus.AUTH ? <Avatar /> : <LoginButton />);
};

export default CheckAuth;
