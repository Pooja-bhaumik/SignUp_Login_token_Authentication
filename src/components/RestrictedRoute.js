import React from "react";
import { Route, Redirect } from "react-router-dom";

const RestrictedRoute = (props) => {
  if (!localStorage.token) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/dashboard" />;
  }
};

export default RestrictedRoute;
