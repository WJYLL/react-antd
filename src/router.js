import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './layouts';
import Task from './pages/task/task';
import Feed from './pages/feed/feed';
import SetTop from './pages/setTop/setTop';
import TreeDome from './pages/antd/tree1';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" render={() => (
        <Home>
          <Switch>
            <Route path="/znbd/task" exact component={Task} />
            <Route path="/znbd/feed" exact component={Feed} />
            <Route path="/znbd/setTop" exact component={SetTop} />
            <Route path="/antd/tree" exact component={TreeDome} />
          </Switch>
        </Home>
      )} />
    </Router>
  );
}

export default RouterConfig;
