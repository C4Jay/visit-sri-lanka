import React, { Component } from 'react';
import styles from './responsive.module.css';
import { Link } from 'react-router-dom';

class Test extends Component {
    render () {
        return (
            <div className={styles.mainmobile}>
            <div className={styles.holdmobile}>
            <img src="https://images.unsplash.com/photo-1524726240783-939bfdd633e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" ></img>
            </div>
            <div className={styles.titlemobile}>
            <Link to="/"><h1>Visit Sri Lanka</h1></Link>
            </div>
            </div>
        )
    }
}


export default Test;