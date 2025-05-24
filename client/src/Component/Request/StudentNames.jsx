import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import BackHandIcon from '@mui/icons-material/BackHand';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContex';
import { useState } from 'react';

export default function StudentNames({ name ,socketref,socketid}) {
  const[btnchange,setbtnchange]=useState(true)
  
  
  const value = false; // Replace with actual logic to determine the state
console.log(socketref.current.id,"studentname");
   let target=socketid;
   console.log(socketref,"sa")
   const {atd,setatd,roomid}=useContext(ThemeContext);

 const Handleaccess=(socketref,target,roomid)=>{
  if(btnchange==false){
    HandleDecline(socketref,target,roomid);
    setbtnchange(prv=>!prv)
    return;
  }
    console.log("access",socketref)
    if(socketref.current){
        // console.log("access")
        console.log(target,"i")
      socketref.current.emit("access",{target,roomid,value:true})
    }
    setbtnchange(prv=>!prv)
    

  }

 const HandleDecline=()=>{
   
    
    if(socketref.current){
        console.log("access")
      socketref.current.emit("access",{target,roomid,value:false})

    }
     setatd(atd.filter(i=>i.name!=i.name));

  }


  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        // height: '120px', // Fixed height
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 1,
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        
        <Box 
         sx={{
            width:"50%",
            overflow:"hidden"
        }}  
        >
          <Typography fontSize={25}
       
        >{name}</Typography>
         
        </Box>
        {value ? (
          <BackHandIcon sx={{ color: '#FFD7C2', fontSize: 40 }} />
        ) : (
          <Button
            variant='contained'
        
            sx={{
              height: '50px',
              minHeight: '50px',
              maxHeight: '50px',
              width: '40%',
              fontSize: '0.6rem',
              padding: '4px 8px',
            }}
            onClick={()=>Handleaccess(socketref,target,roomid)}
          >
            {btnchange?"Give Access":"denie"}
          </Button>
        )}
      </Box>
       {!value && (
            <Typography variant="body2" color="textSecondary">
              is present in class
            </Typography>
          )}

      {value && (
        <Box width="100%" mt={1}>
          <Typography variant="body2" gutterBottom>
            {name} has a doubt, resolve his/her query
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" size="small" color="success">
              ACCEPT
            </Button>
            <Button variant="contained" size="small" color="error">
              DECLINE
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
}
