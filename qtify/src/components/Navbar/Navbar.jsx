import React from 'react'
import styles from "./Navbar.module.css";
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';

function Navbar() {
  return (
    <div className={styles.container}>
        <Logo/>
        <Search placeholder="Search a album of your choice"/>
        <Button>Give feedback</Button>

    </div>
  )
}

export default Navbar;