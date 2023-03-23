import React from "react";
import { Divider, Paper, Typography, Box, Button, SvgIcon } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles.css'
import data from "../../data/data";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Triangle from "../../Theme/Icons/triangle";


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
);
function Luxurious() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Typography
        variant="h4"
        color="initial"
        sx={{ fontWeight: "bold", textAlign: "center", mt: "2.5rem",mb:'1.5rem' }}
      >
        LUXURIOUS STAY
      </Typography>
      <Divider sx={{ border: "solid", width: "8%", margin: "0 auto" }} />
      <Box sx={{pb:'4em'}} className='container'>
      <Slider {...settings} className='card-container'>
        {
          data.map((item, index) => {
            return (
              <div className='card-box' key={index}>
              <Paper elevation={3} sx={{p:'1em 0.5em', m:{lg:'0 0.5em', sm:'0 0.5em'}}}>
                <Box sx={{backgroundImage:`url(${item.img})`, height:'300px', backgroundSize:'cover',}}>
                  <Box sx={{background:'#3dbaba75', height:'44px', position:'relative', bottom:'-16em'}}>
                    <Typography variant='h5' color='initial' sx={{textAlign:'center', color:'#fff', fontSize:'1.5rem'}}>US ${item.price}</Typography>
                  </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', my:'1em'}}>
                  <Typography variant="h5" color="initial"sx={{fontSize:{lg:'1.5rem', sm:'1.2rem'}}}>{item.title}</Typography>
                  <Box sx={{display:'flex', alignItems:'center',}}>
                  <Button sx={{color:'#000', fontSize:'1.5em', textTransform:'capitalize'}}>Explore</Button>
                    <SvgIcon>
                      <Triangle/>
                    </SvgIcon>
                  </Box>
                </Box>
              </Paper>
              </div>
            )
          })
        }
        </Slider>
        </Box>
    </div>
  );
}

export default Luxurious;