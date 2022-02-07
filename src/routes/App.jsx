import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";

// pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";

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
