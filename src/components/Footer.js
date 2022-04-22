import { Typography, Box } from '@mui/material'
import React from 'react'

export default function Foota() {
  return (
   <Box sx={{display:'flex', color:'primary.hue',border: '1px', textAlign:'center', justifyContent:'center', mt:{md:6, sm:2,xs:2}}}>
     <Typography sx={{fontSize:{xs:8,sm:8,md:10}, padding:4, display:'flex'}} >
     Kelechi Ugwu official website,2022. All rights reserved
     </Typography>
   </Box>
  )
}
