import React from "react";
import styles from "./HeroSection.module.css";
import Logo from "../Logo/Logo";
import heroImg from "../../assets/vibrating-headphone.png";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.title}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>and “Over thousands podcast episodes</h1>
      </div>
      <Logo Img={heroImg} width="212px" height="212px"/>
    </div>
  );
}

export default HeroSection;
