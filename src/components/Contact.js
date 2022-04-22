
import {  Box, Typography, Button} from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <Box sx={{minHeight:'60vh',px:{xs:1,sm:2,md:25,lg:25}, display:'flex',flexDirection:'column',justifyContent:'center',
    alignItems:'center'}}>
        <Typography variant='h5' sx={{color:'primary.white', display:'flex', mb:4,mt:2}} >
            <Typography variant='h5' sx={{color:'primary.main'}}> 04. </Typography> Contact me
          </Typography>
          {/* <Typography variant='h4' sx={{color:'primary.hue'}} > 
            Get in touch
          </Typography> */}
          <Typography variant='p' sx={{color:'primary.white', lineHeight:2}} > 
            I am a freelancer, specialized on frontend web development.
            As a software engineer with Computer science background, with experience in Fintech, academics, 
            Cryptocurrency, entertainment etc. , I continously deliver outstanding projects. I am open to work, and look 
            forward to working with you.
          </Typography>
          <Button variant='outlined' sx={{ textTransform:'none',color:'primary.main',mt:4 }} 
          onClick={() => window.location = 'mailto:kcblack22@gmail.com' }> Get in touch</Button>
    </Box>
  )
}
