import React from "react";
import styles from "./HeroSection.module.css";
import headphones from "../../assets/hero-headphones.png";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>
      <img src={headphones} alt="Headphones" />
    </section>
  );
};

export default HeroSection;
