import { SvgIcon, Typography, Box, Divider, AppBar, Link } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system';
import Place from '../../Theme/Icons/location';
import Phone from '../../Theme/Icons/phone';
import { NavLink } from 'react-router-dom';

function MainNav() {
    return (
        <Box>
            <Container>
                <AppBar position='static' sx={{display:'flex', flexDirection:{lg:'row', xs:'column'}, justifyContent:'space-between', alignItems:'center', my:'1rem', background:'#fff', boxShadow:'none', mb:{xs:'0', lg:'1em'}}}>
                    <Link href="https://g.page/popcornit?share" target="_blank">
                    <SvgIcon sx={{display:{lg:'block', xs:'none'}}}>
                        <Place />
                    </SvgIcon>
                    </Link>
                    <NavLink to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="247.785" height="49.868" viewBox="0 0 247.785 49.868" className='hotel-logo'>
                        <g id="hotel" transform="translate(-3.1 -20.1)">
                            <path id="Path_1" data-name="Path 1" d="M87.922,45.272V29.525H97.943v39.13H88.28c-.239-4.056-.477-8.112-.716-12.288H13.479c-.239,4.056-.358,7.993-.6,12.169H3.1V20.1H13.121V45.272Z" fill="#121212" />
                            <path id="Path_2" data-name="Path 2" d="M128.7,47.558a20.8,20.8,0,0,1-20.52,21.116A20.574,20.574,0,0,1,87.3,47.916a20.7,20.7,0,1,1,41.4-.358Zm-9.663,0a10.932,10.932,0,0,0-11.453-10.737A11.135,11.135,0,0,0,96.844,47.8a11.1,11.1,0,1,0,22.19-.239Z" transform="translate(16.25 1.293)" fill="#121212" />
                            <path id="Path_3" data-name="Path 3" d="M146.013,67.111H135.633V38.24c-4.056-.239-7.516-.358-11.333-.6V28.1h33.046v9.544c-3.7.239-7.158.358-11.214.6C146.013,47.784,146.013,57.209,146.013,67.111Z" transform="translate(23.391 1.544)" fill="#121212" />
                            <path id="Path_4" data-name="Path 4" d="M197.983,57.128h17.179v9.9H188.2V27.9h9.663C197.983,37.325,197.983,46.749,197.983,57.128Z" transform="translate(35.724 1.505)" fill="#121212" />
                            <path id="Path_5" data-name="Path 5" d="M38.008,40.274c-7.039,0-13.242.119-19.327-.119-1.312,0-3.579-1.074-3.579-1.789a6.115,6.115,0,0,1,1.67-4.533C22.021,29.3,34.429,32.639,38.008,40.274Z" transform="translate(2.314 2.254)" fill="#121212" />
                            <path id="Path_6" data-name="Path 6" d="M167.4,37.544h19.684V28H157.5V67.369h29.586V57.228H167.4V52.337h16.583V42.555H167.521V37.544Z" transform="translate(29.799 1.525)" fill="#121212" />
                        </g>
                    </svg>
                    </NavLink>
                    <Box sx={{display:{lg:'flex', xs:'none'}, flexDirection:'row', alignItems:'center'}}>
                    <SvgIcon fontSize='large' >
                        <Phone />
                    </SvgIcon>
                    <Link href="tel:+88 096 78 44 11 44" underline='none'>
                    <Typography sx={{color:'#000'}}>
                    +88 096 78 44 11 44
                    </Typography></Link>
                    </Box>
                </AppBar>
            </Container>
            <Divider width="80%" sx={{margin:'0 auto'}}/>
        </Box>
    )
}

export default MainNav;