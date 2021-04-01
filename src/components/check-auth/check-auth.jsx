import React from 'react';
import {connect} from "react-redux";

import {SetAuthStatus} from "../../const";
import {authorizationStatusPropType} from "../../types";

import LoginButton from "../login-button/login-button";
import Avatar from "../avatar/avatar";

const CheckAuth = ({authorizationStatus}) => {
  return (authorizationStatus === SetAuthStatus.AUTH ? <Avatar /> : <LoginButton />);
};

CheckAuth.propTypes = {
  authorizationStatus: authorizationStatusPropType
};

const mapStateToProps = ({authorizationStatus}) => ({authorizationStatus});

export {CheckAuth};
export default connect(mapStateToProps, null)(CheckAuth);
