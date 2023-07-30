import Navbar from './Components/Navbar'
import Box from '@mui/material/Box'
import Header from './Components/Header'
import About from './Components/about'
import Contact from './Components/contact'
import Footer from './Components/footer'

function App() {
  return (
    <Box sx={{margin:'0px', border:'1px solid black', height:'100vh', boxSizing:'border-box'}}>
      <Navbar/>
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </Box>
  );
}

export default App;
