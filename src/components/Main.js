import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import { Registration } from "./Registration";
import { Explore } from "./Explore";


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/explore' component={Explore}/>
    </Switch>
  </main>
)

export default Main
