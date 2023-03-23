import React from "react";
import { Box } from "@mui/system";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import bg from "../../assets/bg-slider.jpg";
import bg2 from "../../assets/bg-slider2.jpg";
import Booking from "./booking.jsx";
import "swiper/css/pagination";
SwiperCore.use([Pagination]);

const backgroundImg = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  height: "624px",
  width: "100%",
  // position: "relative",
};
const backgroundImgTwo = {
  backgroundImage: `url(${bg2})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  height: "624px",
  width: "100%",
  // position: "relative",
};

function BgSlider() {
  return (
    <>
      <Box sx={{height:'624px', position:'relative'}}>
        <Swiper
          direction={"horizontal"}
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          autoplay={{delay: 5000}}
        >
          <SwiperSlide style={backgroundImg}>
          </SwiperSlide>
          <SwiperSlide style={backgroundImgTwo}>
          </SwiperSlide>
          <SwiperSlide style={backgroundImg}>
          </SwiperSlide>
        </Swiper>
        <Booking/>
      </Box>
    </>
  );
}

export default BgSlider;
