import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Doughnu from './pages/Doughnu';
import Agregar from './pages/Agregar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/appPagos" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
