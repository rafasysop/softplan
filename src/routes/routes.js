import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";

function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
      <Route path='/country/:id' component={ CountryDetail } />
      <Route path='/' exact component={ Home } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
