import React, { useEffect, useRef, useState } from "react";
import projects from "@/assets/projects.json";
import styles from "./HeroView.module.scss";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import SwiperVIew from "./components/SwiperView";
import Navbar from "../navbar/Navbar";
import Description from "./components/Description";

const HeroView: React.FC = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const project = window.location.href.split("/")[4];
    const dataProject = projects.find((el) => el.url === project);
    setData(dataProject);
  }, []);

  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vantaRef.current) {
      TOPOLOGY({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x5c244f,
        backgroundColor: 0x0,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.remove();
      }
    };
  }, [vantaRef]);

  return (
    <div ref={vantaRef} className={styles.container} id="topology">
      <div className={styles.inner_width}>
        <Navbar />
        <div>
          <span>page still in development</span>
          <h3>{data?.title}</h3>
          <div className={styles.project}>
            <SwiperVIew data={data} />
            <Description data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
