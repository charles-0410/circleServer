import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Shop from '../pages/shop'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
