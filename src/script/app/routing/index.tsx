import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Canvas } from 'features/canvas';

const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={Canvas} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouting;
