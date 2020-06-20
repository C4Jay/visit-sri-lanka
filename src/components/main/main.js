import React, { Component } from 'react';
import LandingPage from '../landingpage/landingPage.js';
import RegionsPage from '../regions/regionsPage.js';
import { Button } from '@material-ui/core';

class Main extends Component {

    state = {
        show : 'regions'
    }

    toggler (id) {
        this.setState({
            show: id
        })
    }

    render () {

        let item;

        if(this.state.show == 'landing') {
            item = <LandingPage></LandingPage>
        }

        if(this.state.show == 'regions') {
            item = <RegionsPage></RegionsPage>
        }


        return (
            <div>
                 <h1>Sri Lanka</h1>
            <div style={{display: 'inline-block'}}>
            <Button onClick={() => {this.toggler('landing')}}>Explore all</Button>
            <Button onClick={() => {this.toggler('regions')}}>Explore by regions</Button>
            <Button onClick={() => {this.toggler('favorites')}}>Favorites</Button>
            </div>
            {item}
            </div>
            
        )
    }
}

export default Main;