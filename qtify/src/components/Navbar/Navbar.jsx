import React from 'react'
import styles from "./Navbar.module.css";
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
        <Logo Img="../../assets/musicLogo.svg" width="67px" height="34px"/>
        <Search placeholder="Search a song of your choice"/>
        <Button>Give Feedback</Button>

    </div>
  )
}

export default Navbar;