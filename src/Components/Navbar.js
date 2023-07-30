import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../styles.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function navbar() {

  const  handlePopup = () => {
    console.log('handle popup called')
    let popup = document.querySelector('#popup')
    popup.style.display = 'flex'
  }
  
  const  handleClose = () => {
    let popup = document.querySelector('#popup')
    popup.style.display = 'none'
  }

  return (
    <>

<Box id="popup" className='popup' sx={{
            zIndex:10,
            boxSizing:'border-box', 
            position:'fixed',
            width:'100vw', 
            height:'100vh',
            bgcolor:'rgba(0,0,0,0.5)',
            display:'flex',
            justifyContent:'right',
            display:'none'
    }}>
                    <Box sx={{height:1, p:2, width:{xs:'100%', sm:'50%', md:'33%'}, bgcolor:'#301E4E'}}>
                        <Box sx={{margin:'20px', display:'flex', justifyContent:'right'}}> <HighlightOffIcon fontSize="large" onClick={handleClose} sx={{color:"white"}}/> </Box>
                        <Box sx={{margin:'20px'}}>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', p:2, fontSize:{xs:'2rem', sm:'3rem'}}} >Services</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', p:2, fontSize:{xs:'2rem', sm:'3rem'}}} >About us</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', p:2, fontSize:{xs:'2rem', sm:'3rem'}}} >Blogs</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', p:2, fontSize:{xs:'2rem', sm:'3rem'}}} >Contact us</Typography>
                            <Button sx={{bgcolor:'#FF6E6C', color:'white'}}>BOOK A FREE MARKETING AUDIT</Button>
                        </Box>
                    </Box>
    </Box>


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
                    <Typography sx={{margin:'10px', fontFamily:'Playfair Display', fontSize:{sx:'0px', sm:'25px'}}} color='#301E4E'>Contact</Typography>
                    <Typography sx={{margin:'10px', fontFamily:'Playfair Display', fontSize:{sx:'0px', sm:'25px'}}} color='#301E4E'>Work</Typography>
                    <Box onClick={handlePopup}
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

    
    </>
  )
}
