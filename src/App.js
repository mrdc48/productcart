import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home.js';
import Next from './next.js';
import Header from './header.js';
import { State } from './context';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <State>
            <Header />
            <Switch>
              <Route path="/next" component={Next} />
              <Route path="/" exact component={Home} />
            </Switch>
          </State>
        </Router>
      </>
    );
  }
}

export default App;
