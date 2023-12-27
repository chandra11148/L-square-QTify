// import Swiper core and required modules
import { Navigation} from "swiper";
import React,{useEffect} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls =({data})=>{
  const swiper = useSwiper();
  useEffect(()=>{
    swiper.slideTo(0);
  },[data]);
  return <></>;

}

function Carousel({data,renderComponent}) {
  // console.log(data);
  return (
    <div className={styles.wraper}>
      <Swiper
        // install Swiper modules

        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data && data.map((el)=>(<SwiperSlide>{renderComponent(el)}</SwiperSlide>))}
      </Swiper>
    </div>
  );
}
export default Carousel;
