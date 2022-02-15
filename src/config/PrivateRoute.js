import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

const PrivateRoute = (props) => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <Route {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login.path,
            state: { from: props.location },
          }}
        />
      )}
    </div>
  );
};

export default PrivateRoute;
