import React from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <RestrictedRoute exact path="/login" component={Login} />
          <RestrictedRoute exact path="/" component={Admin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
