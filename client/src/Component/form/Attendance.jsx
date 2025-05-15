import { Button, Paper, Typography } from '@mui/material'
import React, { useState,useRef, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { initsocket } from '../../socket';
import { ThemeContext } from '../../ThemeContex';
export default function Attendance({socketref}) {
  console.log("socketref",socketref);
    const{rollnumber,setrollnumber,roomid}=useContext(ThemeContext)
   
    const popupstyle={
        height:"100px",
        width:"100%",
        display:"flex",
        border:"none",
        
        justifyContent:'center',
        allignItems:"center,",
        borderRadius:"10px 10px 10px 10px ",
        
    }
    const formstyle={
        display:"flex",
        allignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column",
      
    }
    
    const textFieldStyles = {
        backgroundColor: "#F0E9E9",
        borderRadius: "50px",
        outline: "none",
        padding: "8px 12px",
        fontSize: "10px",
        textAlign:"center",
        fontFamily:"jaro",
        width:"90%",
        
        
      };
      const btnstyle={
        width:"40%",
        backgroundColor:"#4B8F17",
        color:"white"

      }

      
      const rollHandler=(e)=>{
        console.log("rollnumber is",rollnumber);
        if(socketref.current){
          socketref.current.emit('mark',{rollnumber,roomid});
        }
        
        toast.dismiss();

      }
  return (

        <Paper  style={popupstyle} elevation={0}>
            <form action="" style={formstyle}>
                <Typography>Please enter your attendance</Typography>
                <input style={textFieldStyles}
                onChange={(e)=>{setrollnumber(e.target.value)}}
                ></input>
                <Button  variant="contained" style={btnstyle} onClick={rollHandler}>send</Button>
            </form>
        </Paper>
   
  )
}
