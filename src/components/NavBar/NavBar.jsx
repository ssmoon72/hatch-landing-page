import React from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar'

import SunriseLogo from '../../assets/sunrise-alarm.svg'

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <div className={styles.logo}>
                <Navbar.Brand href="/">
                    <img
                        src={SunriseLogo}
                        alt="Sunrise Logo"
                    />
                </Navbar.Brand>
            </div>
        </Navbar>
    )
}

export default NavBar;