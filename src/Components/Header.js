import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import image from '../assets/headerBackground.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import './../style.css'

export default function Header() {
  return (
    <Box sx={{
        width:1,
        minHeight:'calc(100vh - 50px)',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        display:{xs:'flex', sm:'block'},
        justifyContent:'center',
        py:2
    }}>
            
            <Box sx={{
                width:{ xs:"100%", sm:'60%', lg:'40%'},
                height:"fit-content",
                backgroundColor:'rgba(248,248,248,0.6)',
                padding:'12px',
                margin:'20px 0',
            }}>
                    <Box sx={{width:1}}>
                        <Typography classname="heading" sx={{fontSize:{xs:'2rem', sm:'5rem'}, width:'fit-content', fontFamily:'Playfair Display', fontWeight:700, lineHeight:'normal' }} color='#301E4E'>We are <span className='heading' style={{color:'#B7364A'}}>Extensive.</span></Typography>
                        <Typography sx={{fontSize:{xs:'1rem', sm:'2rem'} , fontFamily:'Playfair Display', letterSpacing:'0.888px', lineHeight:'normal'}} color='#301E4E'>Helping you stand out in a crowded market</Typography>
                    </Box>
            </Box>

    </Box>
  )
}
