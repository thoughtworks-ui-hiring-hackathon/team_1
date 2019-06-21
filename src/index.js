import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../src/components/screens/home';
i
import configureStore from './store';
import './scss/_index.css';
import App from './app';
import { getCacheFilePath } from 'jest-haste-map';

getPath(screenName){
  return `/${screenName}`;
}

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route path="/" component={Home}/>
      <Route path={getPath(ScreenConstants.HOME)} component = {E}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);