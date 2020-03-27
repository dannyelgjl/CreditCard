import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Card from "./app/Card";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/card"} component={Card} />
      </Switch>
    </BrowserRouter>
  );
}
