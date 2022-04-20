import './App.css';
import { Box, Typography } from '@mui/material';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Experience from './components/Experience';
import Nav from './components/nav';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Box sx={{backgroundColor:'#0B192F', minHeight:'100vh', width:'100vw'}}>
    <Nav />
      <BrowserRouter>
     
      <Typography variant='h3'>
        <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/' element={<Home />} />
        </Routes>
      </Typography>
      </BrowserRouter>
    <Footer />
    </Box>
    </>
  );
}

export default App;
