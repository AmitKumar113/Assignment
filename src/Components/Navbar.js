import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import '../styles.css'

export default function navbar() {

  return (
    <>
    <Box sx={{ 
        width:1, 
        height:'50px', 
        display: 'flex',
        alignItems:'center',
        boxSizing:'border-box',
        border:'1px solid black' 
        }}>
            
            <Box sx={{flex:1}}>

                <Box sx={{
                    margin:'0 20px',
                    width:'25px',
                    height :'25px',
                    backgroundColor:'#301E4E',
                    borderRadius:'4px',
                }}></Box>
                
            </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    margin:'0 10px'
                    }}>
                    <Typography sx={{margin:'10px', fontFamily:'Playfair Display'}} color='#301E4E'>Contact</Typography>
                    <Typography sx={{margin:'10px', fontFamily:'Playfair Display'}} color='#301E4E'>Work</Typography>
                    <Box
                        sx={{
                        width:'25px',
                        height:'25px',
                        border:'1px solid black',
                        py:'6px',
                        px:'4px',
                        boxSizing:'border-box',
                        borderRadius:50
                    }}>
                        <Box sx={{backgroundColor:'black', width:1, height:'2px', margin:'1px'}}></Box>
                        <Box sx={{backgroundColor:'black', width:1, height:'2px', margin:'1px'}}></Box>
                        <Box sx={{backgroundColor:'black', width:1, height:'2px', margin:'1px'}}></Box>
                    </Box>
                </Box>
    </Box>

    <div id="popup" className='popup'>
                    <Box sx={{height:1, width:{xs:'100%', sm:'50%', md:'33%'}, bgcolor:'#301E4E'}}>
                    </Box>
    </div>
    </>
  )
}
