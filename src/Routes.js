import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainComponent as MainComponentView } from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainComponentView />} />
      <Route exact path="/home" render={() => <MainComponentView />} />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
