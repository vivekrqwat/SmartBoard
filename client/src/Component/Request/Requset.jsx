import { Box, Button, Paper } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContex'

export default function Request({name,socketid,socketref}) {
  const {atd,setatd,roomid}=useContext(ThemeContext);
   let target=socketid;
  const HandleDecline=()=>{
   
    
    if(socketref.current){
        console.log("access")
      socketref.current.emit("access",{target,roomid,value:false})

    }
     setatd(atd.filter(i=>i.name!=i.name));

  }
  
 
  const Handleaccess=(socketref,target,roomid)=>{
    console.log("access",socketref)
    if(socketref.current){
        console.log("access")
      socketref.current.emit("access",{target,roomid,value:true})
    }

  }
  return (
    <Paper
    elevation={1}
   
    
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
        <Button variant='contained' size='small' color="success" onClick={()=>Handleaccess(socketref,target,roomid)}>Accept</Button> 
        <Button variant='contained' size='small' color='error' onClick={HandleDecline}>decline</Button>
        </Box>
        </Box>
    </Paper>
  )
}
