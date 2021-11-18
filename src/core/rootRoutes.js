import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DummyComponent from '../features/dummyComponent/DummyComponent.container';

const rootRoutes = () => (
  <Switch>
    <Route path="/about">
      <h2>This is the about page where you will get to know about us</h2>
    </Route>
    <Route path="/users">
      <h2>This is the users section</h2>
      <DummyComponent />
    </Route>
    <Route path="/">
      <h2>Welcome to home page!</h2>
    </Route>
  </Switch>
);

export default rootRoutes;
