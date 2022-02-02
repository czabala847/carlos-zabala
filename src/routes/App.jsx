import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";

// pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
