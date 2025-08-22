import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
