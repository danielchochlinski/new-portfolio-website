import React, { useEffect, useState } from "react";
import styles from "./ProjectsView.module.scss";
import Card from "./components/Card";
import RowView from "./components/RowView";
import SwiperVIew from "./components/SwiperView";
const array = [1, 1, 1, 1];

const getWidth = () => window.innerWidth;
const ProjectsView = () => {
  const [screenWidth, setScreenWidth] = useState(120);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.container}>
      <h3>Projects</h3>
      {/* <div className={styles.nav}></div> */}
      {screenWidth < 1050 ? <SwiperVIew /> : <RowView />}
    </div>
  );
};

export default ProjectsView;
