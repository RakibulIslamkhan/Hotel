import { Button, Divider, Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export default function Journey() {
  return (
    <div className='banner'>
        <Container>
            <Box sx={{textAlign:'center', pt:'5em'}}>
                <Typography variant='h2' sx={{color:'white',letterSpacing:'9px'}}>LIFE IS A JOURNEY</Typography>
                <Typography sx={{color:'white', wordSpacing:'4px', width:'75%', m:'1.5em auto'}}>Life is a journey and it's about growing and changing and coming to terms with who and what you are, and loving who and what you are. Find your next extra ordinary Hotel</Typography>
                <Button variant="contained" sx={{background:'#ccc', color:'#000', p:'0.5em 4em' }}>About Us</Button>
            </Box>
        </Container>
        <Container sx={{display:'flex', width:{lg:'100%', xs:'100%'}, m:'0 auto', justifyContent:'space-between', background:'#e9e8e8', p:{lg:'2em', sm:'0'}, position:'relative', bottom:{lg:'-75px', xs:'-65px'},flexDirection:{lg:'row', xs:'column'}, alignItems:{xs:'center'}, py:{xs:'1em'}, gap:{lg:'0', xs:'5px'}}}>
        <Box>
          <Link underline='none' href='#' color="#000">Partner with us </Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link underline='none' href='#' color="#000">Corporate</Link>
        </Box>
        <Divider orientation="vertical"  flexItem />
        <Box>
          <Link underline='none' href='#' color="#000">Refer & Earn</Link>
        </Box>
        <Divider orientation="vertical"  flexItem />
        <Box>
          <Link underline='none' href='#' color="#000">Travel Agents</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link underline='none' href='#' color="#000">Holiday Packages</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link underline='none' href='#' color="#000">Download App</Link>
        </Box>
      </Container>
    </div>
  )
}
