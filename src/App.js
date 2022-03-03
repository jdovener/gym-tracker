import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Strengtha from './pages/Strengtha';
import Strengthb from './pages/Strengthb';

const App = () => {
   
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/strengtha">Strength A </Link>
        <br></br>
        <Link to="/strengthb">Strength B</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/strengtha">
          <Strengtha />
        </Route>
        <Route path="/strengthb">
          <Strengthb />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;