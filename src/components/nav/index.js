import React from 'react'
import {Box, Typography, Link, Button} from '@mui/material'
import {makeStyles} from '@material-ui/core'
// import { Link } from 'react-router-dom'
// import { Flex } from '../../design-patterns'

const useStyles = makeStyles({
    num:{
        color: '#60D5C6'
    }
})

export default function Nav() {
    const classes = useStyles()
  return (
 
     <Box>
          <Box sx={{justifyContent:'space-between', padding:6, display:'flex', flexDirection:{xs: 'column',sm:'column',md:'row',lg:'row'} }}>
      <Box > 
      <Link href='/' sx={{color:'#60D5C6', textDecoration:'none'}} > Kelechi </Link>
    </Box>

    <Box sx={{display:'flex', justifyContent:'space-evenly' }} > 
     <Box>
     <Link href='/about' sx={{color:'#ffffff', textDecoration:'none'}} >  <span className={classes.num}> 01.</span> About </Link>
      <Link href='/experience' sx={{color:'#ffffff', textDecoration:'none'}} >  <span className={classes.num}> 02.</span> Experience </Link>
      <Link href='/work' sx={{color:'#ffffff', textDecoration:'none'}} >  <span className={classes.num}> 03.</span> Work </Link>
      <Link href='/contact' sx={{color:'#ffffff', textDecoration:'none'}} >  <span className={classes.num}> 04.</span> Contact </Link>
      <Button variant='outlined'> Resume </Button>
     </Box>
    </Box>
  </Box>

  {/* Box for the body */}
  <Box sx={{px:{xs:2,sm:2,md:40}, mt:10,display:'flex',flexDirection:'column' }} >
      <Typography variant='p'>
          Hi, my name is 
      </Typography>
      <Typography variant='h3' sx={{color:'#8994B0'}}>
          Kelechi Ugwu.
      </Typography>
      <Typography variant='h3'>
          I build outstanding web applications
      </Typography>

      <Typography variant='p'>
          I am a fullstack software engineer based in Abuja, Nigeria. 
          I specialize in building website applications and everything related to it.
      </Typography>
      <Button > Get in touch </Button>

  </Box>

     </Box>

 
  )
}
