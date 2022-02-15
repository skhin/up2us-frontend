import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

const ProtectedRoute = (props) => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <Redirect
          to={{
            pathname: routes.home.path,
          }}
        />
      ) : (
        <Route {...props} />
      )}
    </div>
  );
};

export default ProtectedRoute;
