import React from "react";
import styles from "./Navbar.module.scss";
const arr = [1, 2, 3];
const Navbar = () => {
  return (
    <div className={styles.container}>
      {arr.map((el) => (
        <div>some awesooe</div>
      ))}
    </div>
  );
};

export default Navbar;
