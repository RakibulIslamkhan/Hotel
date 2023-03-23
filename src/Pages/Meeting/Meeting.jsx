import React from 'react'
import HotelRooms from '../../components/Accommodation/HotelRooms'
import Reservation from '../../components/Dining/Reservation'
import Footer from '../../components/Footer/Footer'
import MainNav from '../../components/Navigation/MainNav'
import Navbar from '../../components/Navigation/Navbar'
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room5.jpg";
import room5 from "../../assets/room2.jpg";
import room6 from "../../assets/room5.jpg";
import room7 from "../../assets/room3.jpg";
import Memories from '../../components/Dining/Memories'
export default function Meeting() {
  return (
    <div>
        <MainNav/>
        <Navbar/>
        <HotelRooms title={'Restaruant & Bar'}/>
        <Reservation header={'Mosaico'} style={'row'} img={room1}/>
        <Reservation header={'La Vita'} style={'row-reverse'} img={room2}/>
        <Reservation header={'Amalfi'} style={'row'} img={room3}/>
        <Reservation header={'Enigma'} style={'row-reverse'} img={room4}/>
        <Reservation header={'Qs Bar & Longe'} style={'row'} img={room5}/>
        <Reservation header={'Vanitas'} style={'row-reverse'} img={room6}/>
        <Reservation header={'Girdino'} style={'row'} img={room7}/>
        <Memories/>
        <Footer/>
    </div>
  )
}
