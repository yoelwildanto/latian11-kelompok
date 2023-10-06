// src/components/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserTable from "./components/UserTable";
import UserRegistration from "./components/UserRegistration";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserTable} />
        <Route path="/registration" component={UserRegistration} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
