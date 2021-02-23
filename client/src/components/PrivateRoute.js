// replace the "Route" component in our Routing
// PrivateRoute should be able to take in all the same props as `<Route />` ✅
// Render a <Route /> and foward the given props to it ✅
// should check to see if user is authenticated
// if yes, render the given comp
// if not, re-route to the login page

import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      {localStorage.getItem("token") ? { children } : <Redirect />}
    </Route>
  );
}

export default PrivateRoute;
