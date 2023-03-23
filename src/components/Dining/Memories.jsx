import React from 'react'
import { Box, Divider, Link, Typography } from '@mui/material'
import { Container } from '@mui/system'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'
import room5 from '../../assets/room5.jpg'
export default function Memories() {
  const handleImg = (e) => {
    const hotelBg = document.querySelector('.hotel-bg')
    hotelBg.style.backgroundImage = `url(${e})`
    hotelBg.style.transition = "all 2s"
  }
  return (
    <Box sx={{backgroundColor:'#000', height:'600px', color:'#fff'}}>
        <Container>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Box sx={{textAlign:'center', pt:'2em'}}>
                <Typography variant='body1'>WHERE MEMORIES ARE MADE</Typography>
                <Typography variant="h4">An Unforgettable Experience</Typography>
                </Box>
                <Box sx={{backgroundImage:`url(${room1})`, height:'350px', m:{lg:'2em 6em', xs:'0'}, backgroundSize:'cover', position:'relative', display:"flex", justifyContent:'end',flexDirection:"column", backgroundPosition:'center'}} className='hotel-bg'>
                    <Box sx={{display:'flex', textAlign:'center', backgroundColor:'#1a1a1a59', flexDirection:{lg:'row', xs:'column'}}}>
                        <Box className='hotel-memories-text' sx={{cursor:'pointer'}} onMouseEnter={() => handleImg(room1)}>
                        <Typography variant='h6'>Lorem ipsum dolor sit amet.</Typography>
                        <Typography variant='body1' className='hidden'>Lorem ipsum dolor sit amet.</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className='hotel-memories-text2'sx={{cursor:'pointer'}} onMouseEnter={()=>handleImg(room2)}>
                        <Typography variant='h6' sx >Lorem ipsum dolor sit amet.</Typography>
                        <Typography variant='body1' className='hidden2'>Lorem ipsum dolor sit amet.</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className='hotel-memories-text3'sx={{cursor:'pointer'}}
                        onMouseEnter={()=>handleImg(room3)}>
                        <Typography variant='h6' >Lorem ipsum dolor sit amet.</Typography>
                        <Typography variant='body1' className='hidden3'>Lorem ipsum dolor sit amet.</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box className='hotel-memories-text4' sx={{cursor:'pointer'}}
                        onMouseEnter={()=>handleImg(room5)}>
                        <Typography variant='h6' >Lorem ipsum dolor sit amet.</Typography>
                        <Typography variant='body1' className='hidden4'>Lorem ipsum dolor sit amet.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
        <Container sx={{display:'flex', width:{lg:'100%', xs:'100%'}, m:'0 auto', justifyContent:'space-between', background:'#e9e8e8', p:{lg:'2em', sm:'0'}, position:'relative', bottom:{lg:'-50px', xs:'-15px'},flexDirection:{lg:'row', xs:'column'}, alignItems:{xs:'center'}, py:{xs:'1em'},  gap:{lg:'0', xs:'5px'}}}>
        <Box>
          <Link href='#' underline='none' color='#000'>Partner with us </Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link href='#' underline='none' color='#000'>Corporate</Link>
        </Box>
        <Divider orientation="vertical"  flexItem />
        <Box>
          <Link href='#' underline='none' color='#000'>Refer & Earn</Link>
        </Box>
        <Divider orientation="vertical"  flexItem />
        <Box>
          <Link href='#' underline='none' color='#000'>Travel Agents</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link href='#' underline='none' color='#000'>Holiday Packages</Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Link href='#' underline='none' color='#000'>Download App</Link>
        </Box>
      </Container>
    </Box>
  )
}
