import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuIcon from '@mui/icons-material/Menu';
import './../style.css'


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
                            <Typography color="white" sx={{fontFamily:'Playfair Display', fontSize:{xs:'2rem', sm:'3rem'}, letterSpacing: '-0.31px', fontWeight: 400}} >Services</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', fontSize:{xs:'2rem', sm:'3rem'}, letterSpacing: '-0.31px', fontWeight: 400}} >About us</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', fontSize:{xs:'2rem', sm:'3rem'}, letterSpacing: '-0.31px', fontWeight: 400}} >Blogs</Typography>
                            <Typography color="white" sx={{fontFamily:'Playfair Display', fontSize:{xs:'2rem', sm:'3rem'}, letterSpacing: '-0.31px', fontWeight: 400}} >Contact us</Typography>
                            <Button className="btn" sx={{bgcolor:'#FF6E6C', color:'white', padding:{xs:'11px 22px',sm:'20px 36px'}, margin:'30px 0'}}>BOOK A FREE MARKETING AUDIT</Button>
                        </Box>
                    </Box>
    </Box>


    <Box 
        className="navbar"
        sx={{ 
        width:1, 
        height:'60px', 
        display: 'flex',
        alignItems:'center',
        px:4
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
                <Box  className="toggle" 
                    sx={{
                    display:{xs:'none',sm:'flex'},
                    alignItems:'center',
                    margin:'0 10px',
                    gap:'48px'
                    }}>
                    <Typography  sx={{margin:'10px', fontFamily:'Playfair Display', fontSize:{sx:'0px', sm:'30px'}}} color='#301E4E'>Contact</Typography>
                    <Typography sx={{margin:'10px', fontFamily:'Playfair Display', fontSize:{sx:'0px', sm:'30px'}}} color='#301E4E'>Work</Typography>
                </Box>
                    <MenuIcon onClick={handlePopup} fontSize="large"/>
    </Box>

    
    </>
  )
}
