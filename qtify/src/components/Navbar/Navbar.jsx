import React from 'react'
import styles from "./Navbar.module.css";
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
        <Logo>Qtify</Logo>
        <Search placeholder="Search a song of your choice"/>
        <Button>Give Feedback</Button>

    </div>
  )
}

export default Navbar;