import React, { useEffect, useState } from "react";
import styles from "./ProjectsView.module.scss";
import RowView from "./components/RowView";
import SwiperVIew from "./components/SwiperView";
import { Element } from "react-scroll";

const getWidth = () => window.innerWidth;
const ProjectsView = () => {
  const [screenWidth, setScreenWidth] = useState<number>(1200);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
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
    <Element name="projects" className={styles.container}>
      <h3>Projects</h3>
      {/* <div className={styles.nav}></div> */}
      {screenWidth < 1050 ? <SwiperVIew /> : <RowView />}
    </Element>
  );
};

export default ProjectsView;
