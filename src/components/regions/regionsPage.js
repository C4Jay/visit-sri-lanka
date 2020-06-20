import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './regionsPage.module.css';
import matale from '../../assets/imgs/photo-1580889240912-c39ecefd3d95.jpg';
import badulla from '../../assets/imgs/photo-1519576325797-91124298a877.jpg';
import galle from '../../assets/imgs/photo-1567498573339-688686a4b5df.jpg';
import ratnapura from '../../assets/imgs/photo-1580398470644-6a59beb40593.jpg';
import axios from 'axios';

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
        district: '',
        trips: []
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

    show (district) {

        this.setState({
            district: district
        })
        axios.get('https://map-app-rn.firebaseio.com/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            var counter = 0
            for(let key in obj) {
              
              
            if(obj[key].tripdistrict == district) {
            counter++
              hotel.push({
                  tripid: key,
                  
                  triplat: obj[key].triplat,
                  triplng: obj[key].triplng,
                  triptrip: obj[key].triptrip,
                  tripregion: obj[key].tripregion,
                  tripdistrict: obj[key].tripdistrict,
                  tripimg: obj[key].tripimg,
                  tripimg1: obj[key].tripimg1,
                  tripimg2: obj[key].tripimg2,
                  tripimg3: obj[key].tripimg3,
                  tripdescription: obj[key].tripdescription,
                
                //   tripduration: this.getMiles(triplat,triplng)
                tripnumber: counter-1,
              /*   cold: obj[key].cold,
                hot: obj[key].hot,
                monk: obj[key].monk,
                ele: obj[key].ele,
                rainy: obj[key].rainy
                */

               hot: obj[key].hot,
               cold:obj[key].cold,
               rainy: obj[key].rainy,
               monk: obj[key].monk,
               ele: obj[key].ele,
               tiger: obj[key].tiger,
               ocean: obj[key].ocean,
               statu: obj[key].statu,
               hike: obj[key].hike,
               camp: obj[key].camp,
              })
            }
   

            this.setState({
                trips: hotel
            })
            console.log(hotel)

        }

        })
        .catch(err => {
            console.log(err)
        })

       
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
                <h4>Matale</h4>
                <Button onClick={() => {this.show('Matale')}}>+</Button>
                {this.state.district == 'Matale' ?
                <div>
                    {this.state.trips.map(site => {
                        return <div className={styles.box1}><div className={styles.inner1}><img className={styles.imgs} src={site.tripimg}></img><h4>{site.triptrip}</h4><p>{site.tripdescription}</p></div></div>
                    })}
                </div> : null }
                </div>
                </div>
                </Grid>

                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={badulla}>
                </img>
               <h4>Badulla</h4>
                <Button onClick={() => {this.show('Badulla')}}>+</Button>

                {this.state.district == 'Badulla' ?
                <div>
                    {this.state.trips.map(site => {
                        return <div className={styles.box1}><div className={styles.inner1}><img className={styles.imgs} src={site.tripimg}></img><h4>{site.triptrip}</h4><p>{site.tripdescription}</p></div></div>
                    })}
                </div> : null }
                
                </div>
                </div>
                </Grid>


                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={galle}>
                </img>
                <h4>Galle</h4>
                <Button onClick={() => {this.show('Galle')}}>+</Button>

                {this.state.district == 'Galle' ?
                <div>
                    {this.state.trips.map(site => {
                        return <div className={styles.box1}><div className={styles.inner1}><img className={styles.imgs} src={site.tripimg}></img><h4>{site.triptrip}</h4><p>{site.tripdescription}</p></div></div>
                    })}
                </div> : null }
                
                </div>
                </div>
                </Grid>


                <Grid item sm={6} xs={12}>
                <div className={styles.box}>
                <div className={styles.inner}>
                <img src={ratnapura}>
                </img>
                <h4>Ratnapura</h4>
                <Button onClick={() => {this.show('Ratnapura')}}>+</Button>

                {this.state.district == 'Ratnapura' ?
                <div>
                    {this.state.trips.map(site => {
                        return <div className={styles.box1}><div className={styles.inner1}><img className={styles.imgs} src={site.tripimg}></img><h4>{site.triptrip}</h4><p>{site.tripdescription}</p></div></div>
                    })}
                </div> : null }
                
                </div>
                </div>
                </Grid>
                </Grid>
            </div>

        )
    }
}

export default RegionsPage;