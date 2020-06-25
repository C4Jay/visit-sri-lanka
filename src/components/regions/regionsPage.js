import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './regionsPage.module.css';
import matale from '../../assets/imgs/photo-1580889240912-c39ecefd3d95.jpg';
import badulla from '../../assets/imgs/photo-1519576325797-91124298a877.jpg';
import galle from '../../assets/imgs/photo-1567498573339-688686a4b5df.jpg';
import ratnapura from '../../assets/imgs/photo-1580398470644-6a59beb40593.jpg';
import matara from '../../assets/imgs/photo-1522310193626-604c5ef8be43.jpg';
import batticaloa from '../../assets/imgs/photo-1552055568-f8c4fb8c6320.jpg';
import polonnaruwa from '../../assets/imgs/photo-1580889242438-b286d3a752a1.jpg';
import kegalle from '../../assets/imgs/photo-1533484482814-3fe2d922be89.jpg';

import axios from 'axios';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import { Button, IconButton } from '@material-ui/core';
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

    shownot() {
        this.setState({
            district: ''
        })
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
                {/* <Button onClick={() => {this.show('Matale')}}>+</Button> */}
                {this.state.district == 'Matale' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Matale')}} aria-label="show">
  <GetAppIcon/></IconButton> }
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
               {this.state.district == 'Badulla' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Badulla')}} aria-label="show">
  <GetAppIcon/></IconButton> }

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
                {this.state.district == 'Galle' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Galle')}} aria-label="show">
  <GetAppIcon/></IconButton> }

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
                {this.state.district == 'Ratnapura' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Ratnapura')}} aria-label="show">
  <GetAppIcon/></IconButton> }

                {this.state.district == 'Ratnapura' ?
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
                <img src={matara}>
                </img>
                <h4>Matara</h4>
                {this.state.district == 'Matara' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Matara')}} aria-label="show">
  <GetAppIcon/></IconButton> }

                {this.state.district == 'Matara' ?
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
                <img src={batticaloa}>
                </img>
                <h4>Batticaloa</h4>
                {this.state.district == 'Batticaloa' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Batticaloa')}} aria-label="show">
  <GetAppIcon/></IconButton> }

                {this.state.district == 'Batticaloa' ?
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
                <img src={polonnaruwa}>
                </img>
                <h4>Polonnaruwa</h4>
                {this.state.district == 'Polonnaruwa' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Polonnaruwa')}} aria-label="show">
  <GetAppIcon/></IconButton> }

                {this.state.district == 'Polonnaruwa' ?
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
                <img src={kegalle}>
                </img>
                <h4>Kegalle</h4>
                {this.state.district == 'Kegalle' ? 
                <IconButton color="secondary" onClick={() => {this.shownot()}} aria-label="show">
  <PublishIcon/> </IconButton> : <IconButton color="secondary" onClick={() => {this.show('Kegalle')}} aria-label="show">
  <GetAppIcon/></IconButton> }

                {this.state.district == 'Kegalle' ?
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