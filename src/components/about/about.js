import React, { Component } from 'react';
import styles from './about.module.css';
import {Link} from 'react-router-dom';
import Test from '../responsive/responsive';

class ImgPage extends Component {
    render () {
        return (
            <div>
                <div className={styles.mobile}>
                <Test></Test>
                </div>
            <div className={styles.mainhold}>
            <div className={styles.hold}>
            <img src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
            </div>
            <div className={styles.title}>
            <Link to="/img"><h1>Visit Sri Lanka</h1></Link>
            </div>
            </div>
            </div>
        )
    }
}

export default ImgPage;