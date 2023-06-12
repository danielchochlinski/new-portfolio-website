import React, { useEffect, useRef } from "react";
import Birds from "vanta/dist/vanta.birds.min";
import styles from "./HeroVIew.module.scss";
import { Element } from "react-scroll";
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
        color1: 0x5c244f,
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
      <Element name="hero">
        <div>
          <h1>Daniel Chochlinski</h1>
          <span>Front End Developer</span>
        </div>
      </Element>
    </div>
  );
};

export default HeroView;
