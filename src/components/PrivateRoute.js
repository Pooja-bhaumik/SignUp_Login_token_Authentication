import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  if (!localStorage.token) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
};

export default PrivateRoute;
