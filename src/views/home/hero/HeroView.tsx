import React, { useEffect, useRef } from "react";
import Birds from "vanta/dist/vanta.birds.min"; // Import the Vanta.js birds effect
import Script from "next/script";
import styles from "./HeroVIew.module.scss";
const HeroView: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vantaRef.current) {
      Birds({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: 0x90909,
        color2: 0xff0077,
        backgroundColor: 0x0,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.remove();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className={styles.container}>
      <div>
        <h1>Daniel Chochlinski</h1>
        <span>Front End Developer</span>
      </div>
    </div>
  );
};

export default HeroView;
