import { Box, Button, Paper } from '@mui/material'
import React from 'react'

export default function Request({name}) {
  return (
    <Paper
    elevation={1}
    width={"20px"}
    
    >
        <Box display={"flex"}
        flexDirection={"column"}
        height={"90px"}
        justifyContent={"space-evenly"}
        >
        <Paper elevation={0}>{name} has send Requset</Paper>
        <Box display={"flex"} 
       
        justifyContent={"space-evenly"}
       
        >
        <Button variant='contained' size='small' color="success">Accept</Button> 
        <Button variant='contained' size='small' color='error'>decline</Button>
        </Box>
        </Box>
    </Paper>
  )
}
