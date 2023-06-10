import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import styles from "../ProjectsView.module.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import projects from "./projects.json";
// import required modules
import { Pagination } from "swiper";
import Card from "./Card";

const SwiperVIew = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <div className="swiper_container">
      <div className="arrow left" onClick={() => handlePrevious()}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {projects.map((el) => (
          <SwiperSlide>
            <Card key={`${el.title}swiper`} data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow" onClick={() => handleNext()}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    </div>
  );
};
export default SwiperVIew;
