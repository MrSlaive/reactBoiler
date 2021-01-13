import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.scss';
import Header from './App/components/Header';
import UserPage from './App/Users';

function App() {
  return (
    <section className='app-cont'>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={UserPage} />
          </Switch>
        </Router>
    </section>
  );
}

export default App;
