import React from "react";
import styles from "./NavbarView.module.scss";
const NavbarView = () => {
  return (
    <div className={styles.container}>
      <span>Projects</span>
      <span>About Me</span>
      <span>Contact</span>
    </div>
  );
};

export default NavbarView;
