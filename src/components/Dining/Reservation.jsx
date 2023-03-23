import React from "react";
import { Button, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";


export default function Reservation({header, style, img}) {
    console.log(style)
  return (
    <Container>
      <Box sx={{display:'flex', alignItems:'center', flexDirection:{lg:`${style}`, xs:'column-reverse'}, my:'3em' }} >
        <Box sx={{px:'1em'}}>
          <Typography variant="h4">{header}</Typography>
          <Typography sx={{my:'1em', width:{lg:'70%', xs:'100%'}}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad
            deserunt dolorem sint cum delectus et placeat eaque qui, provident
            incidunt. Dolores ullam cumque a asperiores mollitia blanditiis,
            vero quos. <Link href="#">Read More</Link>
          </Typography>
          <Button variant="outlined" sx={{borderRadius:'20px'}}>Reservation</Button>
        </Box>
        <Box width={'100%'}>
          <img src={img} alt="" height={"350px"} width='100%'/>
        </Box>
      </Box>
    </Container>
  );
}
