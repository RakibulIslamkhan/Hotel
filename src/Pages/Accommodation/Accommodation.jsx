import React from 'react'
import Category from '../../components/Accommodation/Category'
import HotelRooms from '../../components/Accommodation/HotelRooms'
import Footer from '../../components/Footer/Footer'
import MainNav from '../../components/Navigation/MainNav'
import Navbar from '../../components/Navigation/Navbar'
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room5 from "../../assets/room5.jpg";

export default function Accommodation() {
  return (
    <>
      <MainNav/>
      <Navbar/>
      <HotelRooms title={'ROOMS & SUITES'}/>
      <Category img={room1} title={'Deluxe Couple'} price={'120'}/>
      <Category img={room2} title={'Deluxe Twin'} price={'120'}/>
      <Category img={room3} title={'Royal Suite'} price={'250'}/>
      <Category img={room5} title={'Grand Suite'} price={'450'}/>
      <Footer/>
    </>
  )
}
