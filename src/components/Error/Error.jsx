import { Box } from '@mui/system'
import React from 'react'
import Footer from '../Footer/Footer'
import MainNav from '../Navigation/MainNav'
import Navbar from '../Navigation/Navbar'

export default function Error() {
  return (
    <div>
        <MainNav/>
        <Navbar/>
        <Box sx={{textAlign:'center', my:'5em'}}>
            <h1>404</h1>
        </Box>
        <Footer/>
    </div>
  )
}
