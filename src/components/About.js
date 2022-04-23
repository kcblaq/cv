import {  Box, Typography} from '@mui/material'
import React from 'react'
// import { makeStyles } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import Pix from '../components/kelechidecadev.jpeg'

const skills = [
  'JavaScript (ES6+)',
'TypeScript',
'React',
'Vue',
'Node.js',
'WordPress',
'Express',
'MongoDb'
]
const useStyles = makeStyles({
  image:{
    maxWidth:'80%', filter: 'brightness(0.5)',
    backgroundColor:'primary.main', maxHeight:'80%', mt:20, borderRadius:5, border:'1px solid #fff',
    '&:hover':{
      paddingTop:4,
      paddingLeft:4,
      transform: 'rotateY(-45deg)',
      border:'3px solid #60D5C6'

    }
  }
})

export default function About() {
  const classes = useStyles()
  return (
    <Box sx={{minHeight:'50vh',width:'100vw', mt:{md:10,sm:2,xs:2,lg:10}, display:'flex', justifyContent:'space-around',flexDirection:{sm:'column-reverse', xs:'column-reverse',md:'row',lg:'row'}, color:'primary.white'}}>
        
        <Box sx={{ml:{md:30,sm:0,xs:0},width:{md:'40vw',sm:'80vw',xs:'80vw'} }}>
          <Typography variant='h5' sx={{color:'primary.white', display:'flex'}} >
            <Typography variant='h5' sx={{color:'primary.main'}}> 02. </Typography> About me
          </Typography>
          <Typography sx={{mt:2}}>
          Hello! My name is Kelechi and I enjoy creating things that live on the internet. My interest in web development started back in 2014 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

Here are a few technologies I’ve been working with recently:
{skills.map((skill) => <li>{skill} </li> )}

          </Typography>
        </Box>

        <Box sx={{width:{md:'40vw',sm:'80vw',xs:'80vw'}, mt:8}}>
          <img src={Pix} alt='My ' className={classes.image} />
        </Box>
    </Box>
  )
}
