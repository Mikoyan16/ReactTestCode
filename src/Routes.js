// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'; // or whatever the location is
import Home from './Home'; // or whatever the location is

const Routes = () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={Home}/>
    </Switch>
</BrowserRouter>
);

export default Routes;