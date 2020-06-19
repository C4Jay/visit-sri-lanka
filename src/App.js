import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage/landingPage';
import {BrowserRouter, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Link exact path="/" component={LandingPage} ></Link>      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
