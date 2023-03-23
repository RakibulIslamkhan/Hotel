import React from "react";
import { Container, Link, Typography } from "@mui/material";
import meeting from "../../assets/meeting.jpg";
import leisure from "../../assets/leisure.jpg";
import business from "../../assets/business.jpg";
import social from "../../assets/social.jpg";
import wedding from "../../assets/wedding.jpg";
import Partner from "./Partner";
function ImgGroup() {
  return (
    <Container sx={{ mt: "4em", mb: "2em" }}>
      <div className="grid">
        <div className="grid-item">
          <Link href="#">
            <div className="img-hover-zoom one">
              <img
                src={business}
                height={"100%"}
                width={"100%"}
                alt="business"
              />
            </div>
          </Link>
          <div className="grid-item-text">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                bottom: "1em",
                left: "5%",
              }}
            >
              BUSINESS
            </Typography>
          </div>
        </div>
        <div className="grid-item tow">
          <Link href="#">
          <div className="img-hover-zoom meeting">
              <img
                src={meeting}
                height={"100%"}
                width={"100%"}
                alt="meeting"
              />
            </div>
          </Link>
          <div className="grid-item-text">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                bottom: "1em",
                left: "5%",
              }}
            >
              MEETING
            </Typography>
          </div>
        </div>
        <div className="grid-item">
          <Link href="#">
          <div className="img-hover-zoom three">
              <img
                src={social}
                height={"100%"}
                width={"100%"}
                alt="social"
              />
            </div>
          </Link>
          <div className="grid-item-text">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                bottom: "1em",
                left: "5%",
              }}
            >
              SOCIAL
            </Typography>
          </div>
        </div>
        <div className="grid-item ">
          <Link href="#">
          <div className="img-hover-zoom five">
              <img
                src={leisure}
                height={"100%"}
                width={"100%"}
                alt="leisure"
              />
            </div>
          </Link>
          <div className="grid-item-text">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                bottom: "1em",
                left: "5%",
              }}
            >
              LEISURE
            </Typography>
          </div>
        </div>
        <div className="grid-item">
          <Link href="#">
          <div className="img-hover-zoom six">
              <img
                src={wedding}
                height={"100%"}
                width={"100%"}
                alt="wedding"
              />
            </div>
          </Link>
          <div className="grid-item-text">
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                position: "absolute",
                bottom: "1em",
                left: "5%",
              }}
            >
              WEDDING
            </Typography>
          </div>
        </div>
      </div>
      <Partner />
    </Container>
  );
}

export default ImgGroup;
