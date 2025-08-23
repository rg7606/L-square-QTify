import React from "react";
import styles from "./Carousel.module.css";
import leftArrow from "../../assets/left-navigation.png";

const LeftNavButton = ({ id }) => (
  <button
    id={id}
    className={`${styles.navBtn} ${styles.left}`}
    aria-label="Previous"
  >
    <img src={leftArrow} alt="Previous" className={styles.icon} />
  </button>
);

export default LeftNavButton;
