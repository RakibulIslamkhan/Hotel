import { Container, Divider, Grid, Link, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from '../../Theme/Icons/facebook';
import Messenger from '../../Theme/Icons/messenger';

function Footer() {
  return (
    <div>
      <Box sx={{ background: "#122038", height: "100%" }}>
        <Container sx={{pt:'6em'}}>
        <Grid container sx={{px:{sm:'0', lg:'4em'}}}>
          <Grid item xs={12} sm={6} md={5} sx={{mt:{lg:'0', xs:'3em'}}}>
            <NavLink to='/home'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="49.868"
              viewBox="0 0 247.785 49.868"
            >
              <g id="hotel" transform="translate(-3.1 -20.1)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M87.922,45.272V29.525H97.943v39.13H88.28c-.239-4.056-.477-8.112-.716-12.288H13.479c-.239,4.056-.358,7.993-.6,12.169H3.1V20.1H13.121V45.272Z"
                  fill="#fff"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M128.7,47.558a20.8,20.8,0,0,1-20.52,21.116A20.574,20.574,0,0,1,87.3,47.916a20.7,20.7,0,1,1,41.4-.358Zm-9.663,0a10.932,10.932,0,0,0-11.453-10.737A11.135,11.135,0,0,0,96.844,47.8a11.1,11.1,0,1,0,22.19-.239Z"
                  transform="translate(16.25 1.293)"
                  fill="#fff"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M146.013,67.111H135.633V38.24c-4.056-.239-7.516-.358-11.333-.6V28.1h33.046v9.544c-3.7.239-7.158.358-11.214.6C146.013,47.784,146.013,57.209,146.013,67.111Z"
                  transform="translate(23.391 1.544)"
                  fill="#fff"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M197.983,57.128h17.179v9.9H188.2V27.9h9.663C197.983,37.325,197.983,46.749,197.983,57.128Z"
                  transform="translate(35.724 1.505)"
                  fill="#fff"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M38.008,40.274c-7.039,0-13.242.119-19.327-.119-1.312,0-3.579-1.074-3.579-1.789a6.115,6.115,0,0,1,1.67-4.533C22.021,29.3,34.429,32.639,38.008,40.274Z"
                  transform="translate(2.314 2.254)"
                  fill="#fff"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M167.4,37.544h19.684V28H157.5V67.369h29.586V57.228H167.4V52.337h16.583V42.555H167.521V37.544Z"
                  transform="translate(29.799 1.525)"
                  fill="#fff"
                />
              </g>
            </svg>
            </NavLink>
            <Typography variant="body2" sx={{color:'lightgray', mt:'0.5em'}}>This place is heaven on earth and is the best <br/> place we’ve ever stayed.</Typography>
            <Typography sx={{color:'lightgray',my:"2em"}}>Nikunja 2, Dhaka, Bangladesh <br/> Email: <a href="mailto:sales.popcornbd@gmail.com" style={{textDecoration:'none', color:'lightgray'}}>mail@hotel.com</a></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <Box>
            <Typography sx={{color:'#fff',fontSize:'1.5em',mb:'1em'}}>Quick Links</Typography>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Rooms & Suites</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Restaurants & Bar </Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Banquet & Conference</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Wellness</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Offers</Link>
          </Box>
        <Box>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em',mt:'4em'}}>Photo Gallery</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Video Gallery</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Reservation</Link>
            <NavLink  to="/contact" style={{display:'block',color:'#fff',mb:'0.5em', textDecoration:'none'}}>Contact</NavLink>
          </Box>
        <Box>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em',mt:'4em'}}>Loyalty</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Press room</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>FAQs</Link>
            <Link underline="none" href="#" sx={{display:'block',color:'#fff',mb:'0.5em'}}>Covid-19 update</Link>
          </Box>
          </Box>
          </Grid>
          </Grid>
          <Box sx={{px:{lg:'4em', sm:'0'}}}>
          <Box sx={{display:'flex', justifyContent:'space-between', mb:'1em'}}>
            <Link href='https://www.facebook.com/' target='_blank'>
            <SvgIcon>
              <Facebook/>
            </SvgIcon>
            </Link>
            <Link href='https://www.messenger.com/' target='_blank'>
            <SvgIcon>
              <Messenger/>
            </SvgIcon>
            </Link>
          </Box>
          <Divider sx={{borderColor:'#4b4b4b'}} />
          <Box sx={{display:{lg:'flex', sm:'block'},justifyContent:'space-between',alignItems:'center', height:{lg:'5em', sm:'0'}}}>
            <Typography sx={{color:'lightgray',my:{lg:'0', xs:'1.2em'}}}>Copyright © 2021 - HOTEL LTD. Recommending ❤ popcorn.com.bd</Typography>
            <Box sx={{display:'flex'}}>
              <NavLink to="/terms-&-conditions" style={{display:'block',color:'#ccc',mb:'0.5em', textDecoration:'none'}}>Terms & Conditions</NavLink>
              <Link href="#" underline="none" sx={{mx:'0.5em', color:'#ccc'}}>Privacy Policy</Link>
              <Link href="#" underline="none" sx={{mx:'0.5em', color:'#ccc'}}>Cookies</Link>
              <Link href="#" underline="none" sx={{mx:'0.5em', color:'#ccc'}}>Sitemap</Link>
            </Box>
          </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;