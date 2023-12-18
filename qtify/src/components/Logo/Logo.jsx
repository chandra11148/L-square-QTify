import React from 'react'
import styles from "./Logo.module.css";

function Logo({Img}) {
  return (
    
        <img src={Img} alt='logo' className={styles.Logo}/>
      
  )
}

export default Logo;