import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/screens/Home';
import Explore from '../src/components/screens/Explore';
import MovieDetails from '../src/components/screens/MovieDetails';
import ActorDetails from '../src/components/screens/ActorDetails';
import Reducer from '../src/reducers/root-reducer';
import './scss/_index.css';
import App from './app';
import Navigation from '../src/components/ui/Navigation';
import * as ScreenConstants from './constants/Screen-names';
let store = createStore(Reducer, applyMiddleware(Thunk));
function getPath(screenName) {
  return `/${screenName}`;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Router>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path={getPath(ScreenConstants.EXPLORE)}
        component={Explore}
      />
      <Route path={'/movie/:id'} component={MovieDetails} />
      <Route path={'/person/:id'} component={ActorDetails} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
