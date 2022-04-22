import { Button } from "@mui/material"



import React from 'react'

export default function MyButton( props) {
  const {width, text, doSomething} = props 
  return (
    <Button variant="outlined" onClick={doSomething} sx={{ width:width, textTransform:'none'  }} >
        {text}
    </Button>
  )
}
