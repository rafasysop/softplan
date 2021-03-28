import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";

function Routes() {
  return (
    <Router basename="/">
      <Switch>
      <Route path='/country/:id' component={ CountryDetail } />
      <Route path='/' exact component={ Home } />
      </Switch>
    </Router>
  )
}

export default Routes;
