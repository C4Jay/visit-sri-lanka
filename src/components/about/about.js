import React, { Component } from 'react';
import styles from './about.module.css';

class ImgPage extends Component {
    render () {
        return (
            <div className={styles.mainhold}>
            <div className={styles.hold}>
            <img src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
            </div>
            <div className={styles.title}>
            <h1>Visit Sri Lanka</h1>
            </div>
            </div>
        )
    }
}

export default ImgPage;