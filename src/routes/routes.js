import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";

function Routes() {
  return (
    <Router>
      <Switch>
      <Route path='/country/:id' component={ CountryDetail } />
      <Route path='/' exact component={ Home } />
      </Switch>
    </Router>
  )
}

export default Routes;
