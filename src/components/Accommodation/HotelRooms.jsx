import React from "react";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";
import room5 from "../../assets/room5.jpg";

export default function HotelRooms({ title }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          my: "3em",
          alignItems: "center",
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: {lg:"flex", xs:'none'},
            mb: { xs: "2em" },
            flexDirection: { lg: "row", xs: "column" },
          }}
          className="hotel-rooms-child"
        >
          <Box className='hotel-img-container'>
          <img
            src={room1}
            alt=""
            height={"100%"}
            width={"180px"}
            className="hotel-rooms"
          />
          <Box className='hotel-overly'>
            <Typography variant="h6" className='text'> Deluxe Couple </Typography>
          </Box>
          </Box>
          <Box className='hotel-img-container'>
          <img
            src={room2}
            alt=""
            height={"100%"}
            width={"180px"}
            className="hotel-rooms"
          />
          <Box className='hotel-overly'>
            <Typography variant="h6" className='text'> Deluxe Twin </Typography>
          </Box>
          </Box>
          <Box className='hotel-img-container'>
          <img
            src={room3}
            alt=""
            height={"100%"}
            width={"180px"}
            className="hotel-rooms"
          />
          <Box className='hotel-overly'>
            <Typography variant="h6" className='text'> Royal Suite </Typography>
          </Box>
          </Box>
          <Box className='hotel-img-container'>
          <img
            src={room4}
            alt=""
            height={"100%"}
            width={"180px"}
            className="hotel-rooms"
          />
          <Box className='hotel-overly'>
            <Typography variant="h6" className='text'> Grand Suite </Typography>
          </Box>
          </Box>
          <Box className='hotel-img-container'>
          <img
            src={room5}
            alt=""
            height={"100%"}
            width={"180px"}
            className="hotel-rooms last-img"
          />
          <Box className='hotel-overly last-overly'>
            <Typography variant="h6" className='text'> Deluxe Couple </Typography>
          </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Rating
            name="half-rating-read"
            defaultValue={5}
            precision={5}
            readOnly
            sx={{ color: "#c52929eb" }}
          />
          <Typography variant="h5" color={"#c52929eb"}>
            {title}
          </Typography>
          <Typography sx={{ px: "1em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reiciendis voluptatem recusandae repudiandae libero sunt ratione!
            Ducimus fugiat harum repellendus consequatur tempore similique magni
            accusamus amet at ut! Dolor, rem.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
