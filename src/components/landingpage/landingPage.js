import React, { Component } from 'react';
import styles from './landingPage.module.css';
import { Button } from '@material-ui/core';
import axios from 'axios';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import env from '../../keys/env.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegionsPage from '../regions/regionsPage';


class LandingPage extends Component {

    googleMapRef = React.createRef()

    state={
        trips: [],
        show: false
    }

   

    componentDidMount() {

        
    // console.log(this.props.location.state.district)

        axios.get('https://map-app-rn.firebaseio.com/Trips.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            var counter = 0
            for(let key in obj) {
              
              
  
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

        

        })
        .catch(err => {
            console.log(err)
        })

       

    }

    showbox (id) {
        this.setState({
            show : id
        })
    }

  

    render () {


        return (
            <div className={styles.main}>
            {/* <h1>Sri Lanka</h1>
            <div style={{display: 'inline-block'}}>
            <h4>Explore all</h4>
            <Link to="/regions"><h4>Explore by regions</h4></Link>
            <h4>Favorites</h4>
            </div> */}
            <div>
                {this.state.trips.map(trip => {
                    return <div className={styles.whole}><div className={styles.box}>
                    <div className={styles.inner}>
                    <h2>{trip.triptrip}</h2>
                    
                   <div style={{flexDirection: 'row', display: 'inline-block'}}>
                    <img style={{/* height: 380, width: 500, */ padding:10}} src={trip.tripimg1}></img>
                    <Button>+ FAVORITES</Button>
                    <Button onClick={() => {this.showbox(trip.tripid)}}>view photos</Button>
                    </div>
                    {/* <h2>{trip.triptrip}</h2> */}
                    <p style={{display: 'inline-block'}}>{trip.tripdescription}</p>
                    
                    <div  className={styles.googlebox1} >
                    <Map
          google={this.props.google}
          zoom={9}
          style={{height:400, width: 400 ,borderRadius: 10}}
        // className={styles.googleboxinner}
          initialCenter={{ lat: trip.triplat, lng: trip.triplng}}
        >
        <Marker position={{ lat: trip.triplat, lng: trip.triplng}} />
        </Map> 
        </div>


        <div  className={styles.googleboxmobile} >
                    <Map
          google={this.props.google}
          zoom={9}
          style={{height:400, width: 250 }}
        // className={styles.googleboxinner}
          initialCenter={{ lat: trip.triplat, lng: trip.triplng}}
        >
        <Marker position={{ lat: trip.triplat, lng: trip.triplng}} />
        </Map> 
        </div>
                  
                    </div>
                   
        </div>



                    {this.state.show == trip.tripid ? <div style={{marginTop: 100}}><img style={{maxHeight: '20%', maxWidth: '30%', padding:10}} src={trip.tripimg}></img>
                <img style={{maxHeight: '20%', maxWidth: '30%', padding:10}} src={trip.tripimg3}></img>
                {/* <img style={{maxHeight: '20%', maxWidth: '30%', padding:10}} src={trip.tripimg1}></img>  */}
                </div>: null}
              
                {/* <div  className={styles.googlebox} >
                    <Map
          google={this.props.google}
          zoom={9}
          style={{height: 500, width: 500 ,borderRadius: 10}}
          initialCenter={{ lat: trip.triplat, lng: trip.triplng}}
        >
        <Marker position={{ lat: trip.triplat, lng: trip.triplng}} />
        </Map> 
        </div> */}
                    </div>
                })}
            </div>

            
            </div>

            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: env.googleapiKeyworking
  })(LandingPage);