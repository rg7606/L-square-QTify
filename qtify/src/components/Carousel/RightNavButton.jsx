import React from "react";
import styles from "./Carousel.module.css";
import rightArrow from "../../assets/right-navigation.png";

const RightNavButton = ({ id }) => (
  <button
    id={id}
    className={`${styles.navBtn} ${styles.right}`}
    aria-label="Next"
  >
    <img src={rightArrow} alt="Next" className={styles.icon} />
  </button>
);

export default RightNavButton;
