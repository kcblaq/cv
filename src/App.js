import './App.css';
import { Box} from '@mui/material';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Experience from './components/Experience';
import Nav from './components/nav';
import Home from './components/Home';
import Foota from './components/Footer';
import { ThemeProvider } from '@mui/material/styles'
// import theme from './design-patterns/Theme';
import theme from './design-patterns/Theme'
import Contact from './components/Contact';
import Work from './components/Work';



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{backgroundColor:'#0B192F', minHeight:'100vh', width:'95vw',  px: { xs:2, sm:2, md:4 },}}>
    <Nav />

      <BrowserRouter>
     
        <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='/' element={<Home />} />
        </Routes>
   
      </BrowserRouter>
    <Foota />
    </Box>
   </ThemeProvider>
    </>
  );
}

export default App;
