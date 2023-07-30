import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box'

export default function footer() {
  return (
    <Box>
        <Box><Typography sx={{fontFamily:' Playfair Display'}}>LOGO</Typography></Box>
        <Box>
            <Box>
                <Typography sx={{fontFamily:' Playfair Display'}}>Home Page</Typography>
                <Typography>Home Page</Typography>
                <Typography>Home Page</Typography>
                <Typography>Home Page</Typography>
                <Typography>Home Page</Typography>
                <Typography>Home Page</Typography>
            </Box>
            <Box>
                <Typography>copyright@2023 </Typography>
            </Box>
        </Box>
        <Box></Box>
    </Box>
  )
}
