import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ image, follows, title }) => {
  return (
    <div className={styles.card} role="article" aria-label={title}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
          aria-label="follows"
        />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
