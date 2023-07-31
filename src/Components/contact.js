import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function contact() {
  return (
    <Box sx={{bgcolor:'#301E4E', padding: '40px 10px 40px 40px'}}>
        <Typography sx={{fontSize:{xs:'2rem', sm:'4rem'}, color:'#A17FC9', fontFamily:'Playfair Display', lineHeight:'normal', letterSpacing:'-0.31px'}}>
            Looking to drive
        </Typography>
        <Typography sx={{fontSize:{xs:'2rem', sm:'4rem'}, color:'#A17FC9', fontFamily:'Playfair Display',lineHeight:'normal', letterSpacing:'-0.31px'}}>
            results? Lets chat. 
        </Typography>
    </Box>
  )
}
