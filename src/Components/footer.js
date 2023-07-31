import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box'
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function footer() {
  return (
    <Box sx={{width:1 , boxSizing:'border-box', display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'center', alignItem:'center', bgcolor:'#301E4E', marginTop:'2px', py:2}}>
        <Box><Typography sx={{fontFamily:' Playfair Display', fontWeight:700, p:{xs:2, sm:4}, fontSize:'35px'}} color='white'>LOGO</Typography></Box>
          <Box sx={{ display:'flex', flexDirection:'column', flex:1, justifyContent:'center', alignItem:'center'}}>
            <Box sx={{display:'flex', width:1, justifyContent:'center', alignItem:'center', flexWrap:'wrap'}}>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>Home Page</Typography>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>About us</Typography>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>Contact</Typography>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>Book Audit</Typography>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>Services</Typography>
                <Typography sx={{fontFamily:' Playfair Display', fontSize:'16px', p:2}} color='white'>Blogs</Typography>
            </Box>
            <Box sx={{display:'flex', width:1, justifyContent:'center', alignItem:'center'}}>
                <Typography color='white'>copyright@2023 </Typography>
            </Box>
        </Box>
        <Box sx={{p:{xs:2, sm:4}, display:'flex', justifyContent:'center', alignItem:'center', gap:"16px"}}>
        <FacebookIcon  sx={{color:'white'}} fontSize="large"/>
        <LinkedInIcon  sx={{color:'white'}} fontSize="large"/>
        <InstagramIcon   sx={{color:'white'}} fontSize="large"/>
        </Box>
    </Box>
  )
}
