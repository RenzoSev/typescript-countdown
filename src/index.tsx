import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
