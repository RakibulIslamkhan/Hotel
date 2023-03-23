import * as React from "react";
import BgSlider from "../../components/Home/bgSlider";
import Event from "../../components/Home/Event";
import Experience from "../../components/Home/Experience";
import Footer from "../../components/Footer/Footer";
import ImgGroup from "../../components/Home/ImgGroup";
import Luxurious from "../../components/Home/Luxurious";
import MainNav from "../../components/Navigation/MainNav";
import Navbar from "../../components/Navigation/Navbar";
import Journey from "../../components/Home/Journey";

export default function Home() {
  return (
    <>
      <MainNav />
      <Navbar />
      <BgSlider />
      <Experience />
      <Luxurious />
      <Event />
      <ImgGroup />
      <Journey/>
      <Footer/>
    </>
  );
}
