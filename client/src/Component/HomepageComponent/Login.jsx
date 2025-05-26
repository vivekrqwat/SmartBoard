import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContex';

export default function Login() {
  // const [roomid, setroomid] = useState('');
  const [uname, setuname] = useState('');
  const navigate = useNavigate();
  const { setusername ,roomid,setroomid} = useContext(ThemeContext);

  const goToDashboard = (e) => {
    e.preventDefault();
    setusername(uname);
    navigate(`/editor/${roomid}`);
  };
  //handle join
  const handlejoin=()=>{
    if(uname=='admin'){
      console.log("setstoreage");
      localStorage.setItem('mark', JSON.stringify(Array(100).fill(0)));
    }
  }

  return (
    <Paper
      elevation={3}
      sx={{
        width: { xs: '90%', sm: '70%', md: '50%' },
        padding: { xs: '20px', sm: '30px', md: '40px' },
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#1a237e',
            textAlign: 'center',
            mb: 2
          }}
        >
          Welcome to DELTA
        </Typography>

        <form
          onSubmit={goToDashboard}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter room ID"
            value={roomid}
            onChange={(e) => setroomid(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                backgroundColor: 'rgba(240, 233, 233, 0.8)',
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: '#4B8F17',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4B8F17',
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Enter username"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                backgroundColor: 'rgba(240, 233, 233, 0.8)',
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: '#4B8F17',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4B8F17',
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#4B8F17',
              color: 'white',
              borderRadius: '50px',
              padding: '12px',
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#3d7312',
              },
            }}
            onClick={handlejoin}
          >
            Join Room
          </Button>
        </form>

        <Typography
          sx={{
            fontFamily: "Roboto",
            color: '#455a64',
            textAlign: 'center',
            mt: 2
          }}
        >
          Don't have a room ID? Create a new room
        </Typography>
      </Box>
    </Paper>
  )
}
