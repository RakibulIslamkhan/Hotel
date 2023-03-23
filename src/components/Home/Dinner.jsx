import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import hotel from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";


SwiperCore.use([Pagination]);

export default function Dinner() {
  const pagination = {
    type: "progressbar",
    clickable: true,
  };
  return (
    <div>
          <Box sx={{ background: '#fff', width:{lg:'70%', xs:'100%'}, m: '0 auto', display:'flex', justifyContent:'space-between', py:'2em', flexDirection:{lg:'row-reverse', xs:'column'} }}>
          <Box sx={{ display: "flex", width: "350px", alignItems: "center", }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold", textAlign: "center", mr:'0.5em',fontFamily:"'Cookie', cursive" }}
              >Plan for Dinner
              </Typography>
              <Divider
                sx={{
                  width: "20%",
                  borderColor: "#d50014",
                  borderBottom: "0",
                  borderWidth: "3px",
                  borderRight: "0",
                  borderLeft: "0",
                }}
              />
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ width: "350px", px: {lg:"2rem", xs:"0"} }}
            >
              This place is heaven on earth and is the best place we’ve ever
              stayed. This place is heaven on earth and isthe best place we’ve
              ever stayed.
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', background:'#fff', width:{lg:'70%', xs:'100%'}, m:'0 auto', height:{lg:'550px', xs:'0'}, flexDirection:{lg:'row-reverse', xs:'column'}, pb:{lg:'0', xs:'8em'}}}>
          <Box sx={{width:{lg:'75%', xs:'100%'}}}>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={pagination}
              autoplay={{ delay: 3000 }}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
            <img src={hotel2} height={'500'} className='hotel-img'/>
              </SwiperSlide>
              <SwiperSlide>
            <img src={hotel} height={'500'}className='hotel-img'/>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box>
          <Paper elevation={3} sx={{ display: 'flex', flexDirection:'column', textAlign:'center',height:'360px', justifyContent:'center', width:{lg:'400px',xs:'100%'}, backgroundColor:'#fff', position:'relative', left:{lg:'3em', xs:'0'}, top:'4.5em', alignItems:'center', zIndex:'1'}}>
              <Typography
                variant="caption"
                color="initial"
              >
                Dining
              </Typography>
              <Typography variant="h4" mb='0.5em'>Caffé Ristorante</Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ width: "350px", px:{lg:"3rem", xs:'0'} }}
              >
                This place is heaven on earth and is the best place we’ve ever
                stayed. This place is heaven on earth and is the best place
                we’ve ever stayed. This place is heaven on earth and is the best
                place we’ve ever stayed. This place is heaven on earth and is
                the best place we’ve ever stayed.
              </Typography>
              <Typography sx={{mt:'1em', fontWeight:'bold'}}>DISCOVER</Typography>
              <Divider sx={{width:'25%', margin:'0 auto', borderWidth:'3px', borderBottom:'0', borderRight:'0', borderLeft:'0', borderColor:'#000'}}/>
            </Paper>
          </Box>
          </Box>
    </div>
  );
}



