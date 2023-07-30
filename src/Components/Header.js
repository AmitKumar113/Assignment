import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import image from '../assets/headerBackground.jpg'


export default function Header() {
  return (
    <Box sx={{
        boxSizing:'border-box',
        width:1,
        height:'calc(100vh - 50px)',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        display:{xs:'flex', sm:'block'},
        justifyContent:'center',
        p:2
    }}>
            
            <Box sx={{
                width:{ xs:"100%", sm:'60%', lg:'40%'},
                height:"fit-content",
                backgroundColor:'rgba(248,248,248,0.6)',
                padding:'12px',
                // transform: {sm: 'translate(0,+35%)'},
                margin:'20px 0',
                boxSizing:'border-box',
                
            }}>
                    <Box sx={{width:1}}>
                        <Typography sx={{fontSize:{xs:'2rem', sm:'5rem'}, width:'fit-content', fontFamily:'Playfair Display', fontWeight:700, lineHeight:'normal' }} color='#301E4E'>We are Extensive</Typography>
                        <Typography sx={{fontSize:{xs:'1rem', sm:'2rem'} , fontFamily:'Playfair Display', lineHeight:'normal'}} color='#301E4E'>Helping you stand out in a crowded market</Typography>
                    </Box>
            </Box>

    </Box>
  )
}
