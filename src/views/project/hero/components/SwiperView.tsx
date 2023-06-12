import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import styles from "../ProjectsView.module.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Card from "../../../home/projects/components/Card";
import Image from "next/image";
const style = {
  borderRadius: "16px",
};
const SwiperVIew = ({ data }: any) => {
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
        {data?.images?.map((el: any) => (
          <SwiperSlide key={el.photo}>
            <img
              src={el.photo}
              // width={1200}
              // height={300}
              alt={el.photo}
              style={style}
            />
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
