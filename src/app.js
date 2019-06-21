import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './scss/style.scss';
import {simpleAction} from './actions/simple-action';


class App extends Component {

	simpleAction = event => this.props.simpleAction();

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">
						Welcome to ThoughtWorks UI Dev Hiring Hackathon
					</h1>
					<pre>
					  {JSON.stringify(this.props.simpleReducer)}
					</pre>
					<button onClick={this.simpleAction}>Test Sample Redux Action</button>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
