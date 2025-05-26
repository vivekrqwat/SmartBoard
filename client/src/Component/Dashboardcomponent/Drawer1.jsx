import { Box, Button, Divider, Drawer, List, ListItemText, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import Request from '../Request/Requset';
import { ThemeContext } from '../../ThemeContex';

export default function Drawer1() {
    const [open,setopen]=useState(false);
    const toggleClick=(e)=>()=>{
        setopen(e);
    }
    const {atd}=useContext(ThemeContext);
    // const a=["sam","kamal","vivek"];
    // it is an highorder functioon ,function ke ander function, 
    // agr yeah nhai hoga to setopen bhoot jada rerender hoga
    const drawer=(
        <Box width={"250px"} onclick={toggleClick(false)}>
            <Typography>REQUEST</Typography>
            <Divider></Divider>
            <List 
            >
              {atd.map((e,i)=>{
               
                return<Request key={i} name={e}></Request>
              })}
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
