import React from 'react';
import {
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
import Users from './content/users/Users.view';
import User from './content/user/User.container';

const dummyComponentRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:index`}>
        <User />
      </Route>
      <Route path={path}>
        <h3>Please select a user</h3>
        <Users />
      </Route>
    </Switch>
  );
};

export default dummyComponentRoutes;
