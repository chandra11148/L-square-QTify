import React from 'react'
import styles from "./Logo.module.css";

function Logo({Img,width,height}) {
  return (
        <img src={Img} alt='logo' className={styles.Logo} width={width} height={height}/>
  )
}

export default Logo;