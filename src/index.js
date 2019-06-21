import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import configureStore from './store';
import './scss/_index.css';
import App from './app';

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);