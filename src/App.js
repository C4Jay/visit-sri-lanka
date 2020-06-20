import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage/landingPage';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import RegionsPage from './components/regions/regionsPage';
import ImgPage from './components/about/about';
import Main from './components/main/main';

function App() {
  return (
    
      <Router>
        <div>
      <Switch>
        {/* <Link exact path="/" component={LandingPage} ></Link>       */}
        <Link exact path = "/" component={Main}></Link>
        <Link path="/regions" component={RegionsPage} ></Link>
        <Link path="/img" component={ImgPage} ></Link>
        </Switch>
        </div>

      </Router>
  );
}

export default App;
