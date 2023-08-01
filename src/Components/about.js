import { Box, Button } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import image from '../assets/shape2.svg'
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
import './../style.css'


export default function about() {
  return (
    <>
    <Box sx={{
        width:1,
        minHeight:{xs:'fit-content',sm:'100vh'},
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        p:{xs:2, sm:8},
        }}>

          <Typography sx={{fontSize:{xs:'1rem', sm:'25px'} , fontFamily:'Playfair Display', lineHeight:'normal'}} color='#301E4E'>WHO WE ARE</Typography>
          <Typography sx={{margin:'10px 0', fontSize:{xs:'3rem', sm:'4rem', md:'99px'}, fontFamily:'Playfair Display', fontWeight:900, lineHeight:'normal'}} color='#301E4E'>We are Extensive.</Typography>
          <Typography sx={{fontSize:{xs:'1rem', sm:'35px'} , fontFamily:'Source Sans Pro, calibri' , lineHeight:'normal', fontStyle:'normal'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          <Button variant="contained" sx={{width:"fit-content", marginTop:'40px', bgcolor:'#301E4E', padding:{xs:'11px 22px',sm:'20px 36px'}}}>BOOK A FREE MASTER CLASS AUDIT</Button>
      </Box>
    
{/*************************     WHAT WE DO SECTION STARTS HERE       *************************/}

      <Box sx={{
        boxSizing:'border-box',
        width:1,
        minHeight:'120vh',
        display:'flex',
        justifyContent:'center',
        flexDirection:{xs:'column', sm:'row'},
        margin:''
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
                <Typography sx={{fontSize:{xs:'3rem', sm:'99px'},fontFamily:'Playfair Display', fontWeight:700}} color='#301E4E'>WHAT</Typography>
                <Typography sx={{fontSize:{xs:'3rem', sm:'99px'},fontFamily:'Playfair Display', fontWeight:700}} color='#301E4E'>WE DO.</Typography>
                <Typography sx={{fontSize:{xs:'1rem', sm:'35px'}, fontFamily:'Source Sans Pro, calibri'}} color='#301E4E'>We do lots of stuffs , basically adding value to your product .</Typography>
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
                      flexDirection:'column',
                      gap:'10px'
                    }}>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Typography sx={{fontSize:'2rem', margin:'10px 0',fontFamily:'Playfair Display'}} color='#301E4E'>Digital Marketing</Typography>
                      <Button className="btn" variant="contained" sx={{width:'fit-content',padding:{xs:'11px 22px',sm:'20px 36px'}, margin:'10px 0', bgcolor:'#301e4e'}}>View all</Button>
                  </Box>
            </Box>

        </Box>
      
{/* ************************     OUR WORK STARTS HERE       *************************/}


          <Box sx={{
            boxSizing:'border-box',
            padding:{sm:'40px'},
            backgroundColor:'#301E4E'
          }}>
            <Typography variant="h2" color="white" sx={{ lineHeight:'normal', fontFamily:'Playfair Display', fontWeight:700}}>OUR</Typography>
            <Typography variant="h2" color="white" sx={{ lineHeight:'normal', fontFamily:'Playfair Display', fontWeight:700}}>WORK</Typography>
            <Button className="btn" variant="contained" sx={{width:'fit-content', padding:{xs:'11px 22px',sm:'20px 36px'}, margin:'10px', bgcolor:'#FF6E6C'}}>View all</Button>

            <Box sx={{
              display:'flex',
              justifyContent:'center',
              flexDirection:{xs:'column', sm:'row'},
              margin:'10px',
              gap:'24px'
            }}>
            <Card sx={{ maxWidth:{xs:'100%', sm:450}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="540"
                    image={`${starbucks}`}
                    alt="nike"
                  />
                  <CardContent>
                    <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>DIGITAL MARKETING</Typography>
                    <Typography gutterBottom component="div" color="white" sx={{fontSize:'49px', fontFamily:'Playfair Display', fontWeight:400}}>
                      STARBUCKS
                    </Typography>
                    <Typography variant="body2" color="white" sx={{fontSize:'25px', fontFamily:'Source Sans Pro, calibri', fontWeight:400, fontStyle:'normal'}}>
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


            <Card sx={{ maxWidth: {xs:'100%', sm:445}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`${nike}`}
                    alt="nike"
                  />
                  <CardContent>
                  <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro, calibri'}}>DIGITAL MARKETING</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize:'49px', fontFamily:'Playfair Display', fontWeight:400}}>
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="white" sx={{fontSize:'25px', fontFamily:'Source Sans Pro, calibri', fontWeight:400, fontStyle:'normal'}}>
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
              margin:'10px',
              gap:'24px'
            }}>

              <Card sx={{ maxWidth: {xs:'100%', sm:445}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`${nike}`}
                    alt="nike"
                  />
                  <CardContent>
                  <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro, calibri'}}>DIGITAL MARKETING</Typography>
                    <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize:'49px', fontFamily:'Playfair Display', fontWeight:400}}>
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="white" sx={{fontSize:'25px', fontFamily:'Source Sans Pro, calibri', fontWeight:400, fontStyle:'normal'}}>
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth:{xs:'100%', sm:450}, marginTop:{xs:'10px', sm:'0px '}, bgcolor:"#301E4E" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="540"
                    image={`${starbucks}`}
                    alt="nike"
                  />
                  <CardContent>
                    <Typography color="#FF6E6C" sx={{fontfamily:'Source Sans Pro'}}>DIGITAL MARKETING</Typography>
                    <Typography gutterBottom component="div" color="white" sx={{fontSize:'49px', fontFamily:'Playfair Display', fontWeight:400}}>
                      STARBUCKS
                    </Typography>
                    <Typography variant="body2" color="white" sx={{fontSize:'25px', fontFamily:'Source Sans Pro, calibri', fontWeight:400, fontStyle:'normal'}}>
                    Our ad campaign brought 80% footfall to the company   
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            

              </Box>
          </Box>
    
{/* ************************     Our partners section STARTS HERE       *************************/}


        <Box sx={{
          // minHeight:'80vh',
          margin:'20px'
        }}>
            <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700, letterSpacing:'-0.31px', lineHeight:'normal'}} >Our</Typography>
            <Typography sx={{fontSize:{xs:'3rem', sm:'4rem'},fontFamily:'Playfair Display', fontWeight:700, letterSpacing:'-0.31px', lineHeight:'normal'}}>Partners.</Typography>
            <Typography color="#FF6E6C" sx={{fontFamily:'Source Sans Pro, calibri',fontSize:{xs:'20px', sm:'25px'}}}>Your success is our success.</Typography>
          <Box sx={{minHeight:'60%'}}>
              <Box sx={{
                display:'flex',
                minHeight: {xs:'25%',sm:'50%'},
                flexWrap:'wrap',
                padding:'24px 0'
              }}>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column', minWidth:'90px', maxWidth:'30%' }}>
                      <img src={`${pinterest}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display', fontWeight:400}}>Pinterest</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column', minWidth:'100px' , maxWidth:'30%'}}>
                      <img src={`${pwa}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display', fontWeight:400}}>PWA</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column', minWidth:'100px', maxWidth:'30%' }}>
                      <img src={`${sass}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display', fontWeight:400}}>Sass</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column', minWidth:'100px', maxWidth:'30%' }}>
                      <img src={`${vue}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display', fontWeight:400}}>Pinterest</Typography>
                  </Box>
                  <Box sx={{flex:1, display:'flex', alignItems:'center', flexDirection:'column', minWidth:'100px', maxWidth:'30%' }}>
                      <img src={`${square}`} width='70%' height='70%'></img>
                      <Typography sx={{textAlign:'center',fontSize:'25px', fontFamily:' Playfair Display', fontWeight:400}}>Pinterest</Typography>
                  </Box>
              </Box>
          </Box>
        </Box>
    
    
    
    </>
  )
}
