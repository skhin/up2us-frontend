import "./App.css";
import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "./config/routes";

function App() {
  const Layout = lazy(() => import("./components/Layout/Layout"));

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderRoutes.map(([key, route]) => (
            <route.type
              key={key}
              exact
              path={route.path}
              render={() => (
                <Layout>
                  <route.component {...route.props} />
                </Layout>
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
