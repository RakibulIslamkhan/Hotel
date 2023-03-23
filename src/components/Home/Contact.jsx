import { Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Footer from '../Footer/Footer'
import MainNav from '../Navigation/MainNav'
import Navbar from '../Navigation/Navbar'
import bg1 from '../../assets/room1.jpg'

export default function Contact() {
  return (
    <div>
        <MainNav/>
        <Navbar/>
        <Container sx={{display:'flex', justifyContent:'space-around', my:'4em', flexDirection:{xs:'column-reverse', lg:'row'}}}>
            <Box sx={{mt:{lg:'0', xs:'1.5em'}}}>
                <Typography variant='h6'>Corporate Office</Typography>
                <Typography>Nikunja 2, Dhaka, Bangladesh</Typography>
                <Typography>TEL: 017506xxxxx</Typography>
                <Typography variant='h6' sx={{fontSize:'1em'}}>Shang Li Circle</Typography>
                <Typography>E-mail: <Link href='https://www.shangri-la.com/'>shangri-la.com</Link></Typography>
                <Typography variant='h6' sx={{fontSize:'1em'}}>Shang Li Circle</Typography>
                <Typography>E-mail: <Link href='https://www.shangri-la.com/'>shangri-la.com</Link></Typography>
                <Typography variant='h6' sx={{fontSize:'1em'}}>Shang Li Circle</Typography>
                <Typography>E-mail: <Link href='https://www.shangri-la.com/'>shangri-la.com</Link></Typography>
                <Typography variant='h6' sx={{fontSize:'1em'}}>Shang Li Circle</Typography>
                <Typography>E-mail: <Link href='https://www.shangri-la.com/'>shangri-la.com</Link></Typography>

            </Box>
            <Box>
                <img src={bg1} height={'240'}/>
            </Box>
        </Container>
        <Footer/>
    </div>
  )
}
