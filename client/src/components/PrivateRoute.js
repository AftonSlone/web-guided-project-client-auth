// replace the "Route" component in our Routing
// PrivateRoute should be able to take in all the same props as `<Route />` ✅
// Render a <Route /> and foward the given props to it ✅
// should check to see if user is authenticated
// if yes, render the given comp
// if not, re-route to the login page

import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // render component
          return <Component />;
        } else {
          // route to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
