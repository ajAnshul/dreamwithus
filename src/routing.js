import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
                Home router
          </Route>
        </Switch>
      </div>
    </Router>
  );
}