import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './regionsPage.module.css';
import matale from '../../assets/imgs/photo-1580889240912-c39ecefd3d95.jpg';
import badulla from '../../assets/imgs/photo-1519576325797-91124298a877.jpg';
import galle from '../../assets/imgs/photo-1567498573339-688686a4b5df.jpg';
import ratnapura from '../../assets/imgs/photo-1580398470644-6a59beb40593.jpg';


import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class RegionsPage extends Component {

  /*   navHandler() {
        this.props.history.push({
            pathname: '/about',
            // state: {district: district1}
      
          })
    } */

    state = {
        district: 'matale'
    }

    find () {
        console.log(this.state.actor)
        this.props.history.push({
          pathname: '/about',
          state: {district: 'matale'}
    
        })
      }
    
    districtHandler(district1) {
        this.setState({
            district: district1
        })

        console.log(this.state.district)

    }


    render () {
        return (
            <div className={styles.main}>
            <Grid 
            container
            // spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={matale}>
                </img>
                <Button onClick={() => {this.find()}}>find</Button>
                </div>
                </div>
                </Grid>

                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={badulla}>
                </img>
                <Button onClick={() => {this.districtHandler()}}>BADULLA</Button>
                
                </div>
                </div>
                </Grid>


                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={galle}>
                </img>
                <Button onClick={() => {this.districtHandler('Galle')}}>GALLE</Button>
                
                </div>
                </div>
                </Grid>


                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={ratnapura}>
                </img>
                <Button onClick={() => {this.navHandler(/* 'Matale' */)}}>RATNAPURA</Button>
                
                </div>
                </div>
                </Grid>
                </Grid>
            </div>

        )
    }
}

export default RegionsPage;