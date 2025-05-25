import { Box, Button, Divider, Drawer, List, ListItemText, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import Request from '../Request/Requset';
import { ThemeContext } from '../../ThemeContex';
import StudentNames from '../Request/StudentNames';

export default function Drawer1({socketref}) {
    const [open,setopen]=useState(false);
    const toggleClick=(e)=>()=>{
        setopen(e);
    }
    let st=JSON.parse(localStorage.getItem('students'));
    const dummynames=["vivek","sam","kamal","depanshu","rohit"]
    const {atd,student}=useContext(ThemeContext);
    // const a=["sam","kamal","vivek"];
    // it is an highorder functioon ,function ke ander function, 
    // agr yeah nhai hoga to setopen bhoot jada rerender hoga
    const drawer=(
        <Box width={"250px"} 
        sx={{
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        }}
        >
          
            <TextField placeholder='search'></TextField>
          
              

               <Typography fontSize={20} color='green'>JOinee</Typography>
           <Divider sx={{ bgcolor: 'black', height: 2 }} />
            <List 
            sx={{
              display:"flex",
              flexDirection:"column",
              gap:"16px",
              justifyContent:"center",
              alignItems:"center"

            }}
            >
              {/* {atd.map((e,i)=>{
               
                return<Request key={i} name={e}></Request>
              })} */}
              {
                // st.map((i)=>{console.log(i.username,"s")})
              }

                {
                  student&&student.map((i,index)=>{
                    return ((i.username!=undefined&&i.username!=='admin')?<StudentNames key={index} name={i.username} socketref={socketref} socketid={i.id}></StudentNames>:null)
                  })
                }
                {/* <ListItemText primary={"kamal"}></ListItemText> */}
            </List>

        </Box>
    )
  return (
    <div>
      
        <Button onClick={toggleClick(true)} variant='conatined' 
        sx={{background:"#4761DF",
            color:"white",
            fontFamily:"Roboto"
            
           }}
        >check</Button>
      <Drawer open={open} onClose={toggleClick(false)}>
        {drawer}
      </Drawer>
    </div>
  )
}
