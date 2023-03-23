import React from 'react'
import HotelRooms from '../../components/Accommodation/HotelRooms'
import Footer from '../../components/Footer/Footer'
import TabImages from '../../components/Gallery/TabImages'
import Journey from '../../components/Home/Journey'
import MainNav from '../../components/Navigation/MainNav'
import Navbar from '../../components/Navigation/Navbar'
export default function Gallery() {
  return (
    <div>
        <MainNav/>
        <Navbar/>
        <HotelRooms title={'Restaruant & Bar'}/>
        <TabImages/>
        <Journey/>
        <Footer/>
    </div>
  )
}
