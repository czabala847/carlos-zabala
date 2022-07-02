import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Layout } from "../containers/Layout";
// HashRouter,
// pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";

// "homepage": "https://czabala847.github.io/carlos-zabala"
function App() {
  return (
    <HashRouter basename="/">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export { App };
