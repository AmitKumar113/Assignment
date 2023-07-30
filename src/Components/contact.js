import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function contact() {
  return (
    <Box sx={{bgcolor:'#301E4E', px:4}}>
        <Typography sx={{fontSize:{xs:'2rem', sm:'4rem'}, color:'#A17FC9', fontFamily:'Playfair Display', LineHeight:'normal'}}>
            Looking to drive
        </Typography>
        <Typography sx={{fontSize:{xs:'2rem', sm:'4rem'}, color:'#A17FC9', fontFamily:'Playfair Display'}}>
            results? Lets chat.
        </Typography>
    </Box>
  )
}
