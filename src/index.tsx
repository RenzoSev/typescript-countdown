import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './pages/App';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
