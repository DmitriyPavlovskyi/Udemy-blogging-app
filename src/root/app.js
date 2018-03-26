import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Router history={browserHistory} routes={routes}/>
        <div>Hello world</div>
      </div>
    );
  }
}

export default App;
