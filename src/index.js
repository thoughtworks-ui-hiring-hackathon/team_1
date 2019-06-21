import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/screens/Home';
import Explore from '../src/components/screens/Explore';
import Reducer from '../src/reducers/root-reducer';
import './scss/_index.css';
import App from './app';
import Navigation from '../src/components/Ui/Navigation';
import * as ScreenConstants from './constants/Screen-names';
let store = createStore(Reducer, applyMiddleware(Thunk));

function getPath(screenName) {
  return `/${screenName}`;
}

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
    <Router>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path={getPath(ScreenConstants.EXPLORE)}
        component={Explore}
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);
