import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BitOperatorBlog from './components/Blogs/BitOperator';

export default function AppRoutes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
               <BitOperatorBlog /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}