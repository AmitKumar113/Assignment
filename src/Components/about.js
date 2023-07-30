import { Box, Button } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import image from '../assets/shape.jpg'
import starbucks from '../assets/starbucks.jpg'
import nike from '../assets/nike.jpg'
import vue from '../assets/ion_logo-vue.svg'
import square from '../assets/ion_logo-foursquare.svg'
import pwa from '../assets/ion_logo-pwa.svg'
import sass from '../assets/ion_logo-sass.svg'
import pinterest from '../assets/pinterest.svg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function about() {
  return (
    <>
    <Box sx={{
        boxSizing:'border-box',
        width:1,
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        p:{xs:2, sm:8},
        }}>

          <Typography sx={{fontSize:{xs:'1rem', sm:'2rem'} , fontFamily:'Playfair Display', lineHeight:'normal'}} color='#301E4E'>WHO WE ARE</Typography>
          <Typography sx={{margin:'10px 0', fontSize:{xs:'3rem', sm:'4rem', md:'5rem'}, fontFamily:'Playfair Display', fontWeight:700, lineHeight:'normal'}} color='#301E4E'>We are Extensive.</Typography>
          <Typography sx={{fontSize:{xs:'1rem', sm:'2rem'} , fontFamily:'Source Sans Pro' , lineHeight:'normal'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          <Button variant="contained" sx={{width:"fit-content", marginTop:'40px', bgcolor:'#301E4E'}}>BOOK A FREE MASTER CLASS AUDIT</Button>
      </Box>
    
{/*************************     WHAT WE DO SECTION STARTS HERE       *************************/}

      <Box sx={{
        boxSizing:'border-box',
        width:1,
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        flexDirection:{xs:'column', sm:'row'},
        p:{xs:2, sm:8},
      }}>
            <Box sx={{
              bgcolor:'#E7D7F6',
              width:{xs:'100%', sm:'50%'},
              display:'flex',
              justifyContent:'center',
              // alignItems:'center',
              boxSizing:'border-box',
              p:4,
              flexDirection:'column',
              backgroundImage: `url(${image})`,
              backgroundColor:{xs:'#E7D7F6',md:'white'},
              backgroundPosition: 'center',
              backgroundSize:'cover'
            }}>
                <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700}} color='#301E4E'>WHAT</Typography>
                <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700}} color='#301E4E'>WE DO.</Typography>
                <Typography sx={{fontSize:{xs:'1rem', sm:'2rem'}, fontFamily:'Source Sans Pro'}} color='#301E4E'>We do lots of stuffs , basically adding value to your product .</Typography>
            </Box>


            <Box sx={{
              width:{xs:'100%', sm:'50%'},
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>   
                  <Box sx={{
                      width:"fit-content",
                      display:'flex',
                      justifyContent:'center',
                      // alignItems:'center',
                      flexDirection:'column'
                    }}>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Button variant="contained" sx={{width:'fit-content', margin:'10px 0', bgcolor:'#FF6E6C'}}>View all</Button>
                  </Box>
            </Box>

        </Box>
      
{/* ************************     OUR WORK STARTS HERE       *************************/}


          <Box sx={{
            boxSizing:'border-box',
            padding:{sm:'40px'},
            backgroundColor:'#301E4E'
          }}>
            <Typography variant="h2" color="white" sx={{ lineHeight:'normal'}}>OUR</Typography>
            <Typography variant="h2" color="white" sx={{ lineHeight:'normal'}}>WORK</Typography>
            <Button variant="contained" sx={{width:'fit-content', margin:'10px'}}>View all</Button>

            <Box sx={{
              display:'flex',
              justifyContent:'center',
              flexDirection:{xs:'column', sm:'row'},
              margin:'10px'
            }}>
            <Card sx={{ maxWidth:{xs:'100%', sm:345}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="360"
                    image={`${starbucks}`}
                    alt="nike"
                    // sx={{height: {xs:'240', sm:'360'}}}
                  />
                  <CardContent>
                    <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>Digital Marketing</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      STARBUCKS
                    </Typography>
                    <Typography variant="body2" color="white">
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


            <Card sx={{ maxWidth: {xs:'100%', sm:345}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={`${nike}`}
                    alt="nike"
                  />
                  <CardContent>
                  <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>Digital Marketing</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="white">
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              </Box>

              <Box sx={{
              display:'flex',
              justifyContent:'center',
              flexDirection:{xs:'column', sm:'row'},
              margin:'10px'
            }}>

              <Card sx={{ maxWidth: {xs:'100%', sm:345}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={`${nike}`}
                    alt="nike"
                  />
                  <CardContent>
                  <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>Digital Marketing</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="white">
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


            <Card sx={{ maxWidth:{xs:'100%', sm:345}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="360"
                    image={`${starbucks}`}
                    alt="nike"
                    // sx={{height: {xs:'240', sm:'360'}}}
                  />
                  <CardContent>
                    <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>Digital Marketing</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      STARBUCKS
                    </Typography>
                    <Typography variant="body2" color="white">
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


            

              </Box>
          </Box>
    
{/* ************************     Our partners section STARTS HERE       *************************/}


        <Box sx={{
          height:'80vh',
          margin:'20px'
        }}>
            <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700, letterSpacing:'-0.31px', lineHeight:'normal'}} >Our</Typography>
            <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700, letterSpacing:'-0.31px', lineHeight:'normal'}}>Partners.</Typography>
            <Typography color="#FF6E6C" sx={{fontFamily:'Source Sans Pro',fontSize:{xs:'20px', sm:'25px'}}}>Your success is our success.</Typography>
          <Box sx={{minHeight:'60%'}}>
              <Box sx={{
                display:'flex',
                height: '50%',
                flexWrap:'wrap'
              }}>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                      <img src={`${pinterest}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display'}}>Pinterest</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                      <img src={`${pwa}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display'}}>PWA</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                      <img src={`${sass}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display'}}>Sass</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                      <img src={`${vue}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display'}}>Pinterest</Typography>
                  </Box>
              </Box>
          </Box>
        </Box>
    
    
    
    </>
  )
}
