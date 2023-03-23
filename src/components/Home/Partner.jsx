import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Slider from "react-slick";
import Agoda from "../../assets/Agoda.png";
import BookingLogo from "../../assets/booking.png";
import HotelLogo from "../../assets/hotels.png";
import TripAdvisor from "../../assets/tripadvisor.png";
import Trivago from "../../assets/Trivago.png";

const partner = [Agoda, BookingLogo, HotelLogo, TripAdvisor, Trivago];
export default function Partner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ my: "2em" }}>
      <Divider />
      <Box sx={{ py: "1.5em", display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: "2em" }}>Trusted by</Typography>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: { lg: "90%", xs: "80%" } }}>
          <Slider {...settings}>
            {partner.map((item, index) => {
              return (
                <Box key={index}>
                  <img src={item} alt="" height={35} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
