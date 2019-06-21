import React, { Component } from 'react';
import './scss/style.scss';
import Navigation from '../src/components/ui/Navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}
export default App;
