import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search an album of your choice" />
      <button>🔍</button>
    </div>
  );
};

export default SearchBar;
