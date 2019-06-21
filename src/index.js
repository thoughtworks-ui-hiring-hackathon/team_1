import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/screens/home';
import configureStore from './store';
import './scss/_index.css';
import App from './app';
import * as ScreenConstants from '../src/constants/screen-names';

function getPath(screenName) {
  return `/${screenName}`;
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path={getPath(ScreenConstants.HOME)} component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
