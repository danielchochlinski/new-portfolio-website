import React, { useEffect, useState } from "react";
import styles from "./NavbarView.module.scss";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Tooltip from "@mui/material/Tooltip";

const getWidth = () => window.innerWidth;
const NavbarView = () => {
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
    <div
      className={
        !navOpen ? styles.container : `${styles.container} ${styles.active}`
      }
    >
      <Image
        src="/dch-logo.svg"
        width={`${screenWidth > 767 ? "150" : "110"}`}
        height={`${screenWidth > 767 ? "150" : "110"}`}
        alt="dchLogo"
      />

      <div className="hamburger-div">
        <label
          className="menu-button-wrapper"
          htmlFor=""
          onClick={() => setNavOpen(!navOpen)}
        >
          <input type="checkbox" className="menu-button" />
          <div className="icon-wrapper">
            <label className="hamburger">
              <input className="hamburger-input" type="checkbox" />
              <span className="hamburger-line first"></span>
              <span className="hamburger-line second"></span>
              <span className="hamburger-line third"></span>
            </label>
          </div>
        </label>
      </div>
      <div
        className={!navOpen ? styles.center : `${styles.center} ${styles.open}`}
      >
        <div className={styles.nav}>
          <span>Projects</span>
          <span>About Me</span>
          <span>Contact</span>
        </div>

        <div className={styles.icons}>
          <Tooltip title="GitHub" placement="bottom">
            <GitHubIcon />
          </Tooltip>
          <Tooltip title="Linkedin" placement="bottom">
            <LinkedInIcon />
          </Tooltip>
          <Tooltip title="DownloadResume" placement="bottom">
            <CloudDownloadIcon />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
