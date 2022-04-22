import { Button } from "@mui/material"



import React from 'react'

export default function MyButton( props) {
  return (
    <Button variant="outlined" sx={{ width:props.width, textTransform:'none'  }} >
        {props.text}
    </Button>
  )
}
