import React from "react";
import {useSelector} from "react-redux";
import {SetErrors, AppRoutes} from "../../const";
import {Redirect} from "react-router-dom";

export const ErrorConnection = () => {
  const {error} = useSelector((state) => state.ERROR);

  return error === SetErrors.ERROR_CONNECTION ? <h1>{error}</h1> : <Redirect to={AppRoutes.ROOT} />;
};
