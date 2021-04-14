import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './pages/Home'
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Profile from '../src/pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}
