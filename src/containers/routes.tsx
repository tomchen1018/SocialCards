import {
  Router, Route, Switch
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Home from './HomePage/Home'

export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );

}

export default Routes;
