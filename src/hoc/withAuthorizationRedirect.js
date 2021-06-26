import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const withAuthorizationRedirect = (Component) => {
  const RedirectContainer = ({ props }) => {
    let { isAuth } = useSelector((state) => state.authorization);

    if (!isAuth) return <Redirect to="/Login"></Redirect>;
    return <Component {...props} />;
  };
  return RedirectContainer;
};
