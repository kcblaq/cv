import { Typography, Box} from '@mui/material'
import React from 'react'
import MyButton from '../design-patterns/MyButton'




export default function Home() {
  return (
   <Box sx={{
       px: { xs: 2, sm: 2, md: 40 },
       mt: { xs: 2, sm: 2, md: 10, lg: 10 },
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'space-evenly'
   }}>
   <Typography
       variant="p"
       sx={{ color: 'primary.main', mb: { xs: 2, sm: 2, md: 5 } }}>
       Hi, my name is
   </Typography>
   <Typography
       variant="h3"
       sx={{
           color: '#8994B0',
           fontSize: { xs: 30, sm: 30, md: 46 },
           mb: { xs: 2, sm: 2, md: 5 },
       }}>
       Kelechi Ugwu.
   </Typography>
   <Typography
       variant="h3"
       sx={{
           color: 'primary.white',
           fontSize: { xs: 30, sm: 30, md: 46 },
           mb: { xs: 2, sm: 2, md: 5 },
       }}>
       I build outstanding web applications
   </Typography>

   <Typography
       variant="p"
       sx={{
           color: 'primary.hue',
           fontSize: { xs: 14, sm: 20, md: 16 },
           mb: { xs: 2, sm: 2, md: 5 },
       }}>
       I am a fullstack software engineer based in Abuja, Nigeria. I
       specialize in building website applications and everything related to
       it.
   </Typography>
   <MyButton
   onClick={() => console.log('Welcome')}
       width={{ xs: '100%', sm: '100%', md: '20%' }}
       text="Get in touch"
       
   />
   
</Box>
  )
}
