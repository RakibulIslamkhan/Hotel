import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import "../../styles.css";
import ac from "../../assets/svg-icons/air-conditioner.svg";
import wifi from "../../assets/svg-icons/wi-fi.svg";
import tv from "../../assets/svg-icons/plasma-tv.svg";
import bed from "../../assets/svg-icons/single-room.svg";
import shower from "../../assets/svg-icons/shower_01.svg";
import key from "../../assets/svg-icons/key.svg";
import safe from "../../assets/svg-icons/safe.svg";
import bar from "../../assets/svg-icons/bar.svg";
import { NavLink } from "react-router-dom";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room5 from "../../assets/room5.jpg";
import FsLightbox from "fslightbox-react";
export default function Category({ img, title, price }) {
  const [toggler, setToggler] = React.useState(false);
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            my: "2em",
            flexDirection: { lg: "row", xs: "column" },
            alignItems: { xs: "center" },
          }}
        >
          <Box>
            <img src={img} alt="" height={"350px"} width={"100%"} />
          </Box>
          <Box
            sx={{
              width: { lg: "40%", xs: "100%" },
              mx: "1em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">{title}</Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              alias amet nemo similique a, possimus blanditiis recusandae
              expedita exercitationem.
            </Typography>
            <Box
              sx={{
                display: "flex",
                my: "1em",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={bed}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    King Size Bed
                  </Typography>
                  <Divider />
                </Box>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={tv}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Led Tv
                  </Typography>
                  <Divider />
                </Box>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={wifi}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Wifi
                  </Typography>
                  <Divider />
                </Box>
                <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                  <img
                    src={ac}
                    alt=""
                    height={20}
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  Air Conditioned
                </Typography>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8&w=1000&q=80",
                  ]}
                />
              </Box>
              <Box sx={{ ml: "1em" }}>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={bar}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Tea & Coffee
                  </Typography>
                  <Divider />
                </Box>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={shower}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Hot Shower
                  </Typography>
                  <Divider />
                </Box>
                <Box sx={{ my: "0.5em" }}>
                  <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                    <img
                      src={key}
                      alt=""
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />{" "}
                    Room Service
                  </Typography>
                  <Divider />
                </Box>
                <Typography sx={{fontSize:{xs:'0.7em', lg:'1em'}}}>
                  <img
                    src={safe}
                    alt=""
                    height={20}
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  Electronic Safe Box
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", ml: "1em" }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography>US$</Typography>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {price}
                  </Typography>
                  <Typography>PER NIGHT</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between',}}>
              <Button variant="outlined" onClick={() => setToggler(!toggler)} sx={{fontSize:{xs:'0.5em', lg:'0.875em'}}}>
                Photo Gallery
              </Button>
              <Button variant="outlined" sx={{fontSize:{xs:'0.5em', lg:'0.875em'}}}>Virtual Tour</Button>
              <Button variant="outlined" sx={{fontSize:{xs:'0.5em', lg:'0.875em'}}}>
                <NavLink
                  to="/book"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Book Now
                </NavLink>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
