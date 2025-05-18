import React from 'react'
import Login from '../Component/HomepageComponent/Login'
import { Avatar, Box, Typography, Container } from '@mui/material'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.png"

export default function Home() {
  return (
    <Box 
      width="100%" 
      position="relative" 
      overflow="hidden" 
      height="92vh"
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          width="100%" 
          display="flex" 
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={2}
          sx={{
            minHeight: '100vh',
            padding: { xs: '10px', sm: '10px' }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', sm: '5rem', md: '7rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1a237e',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              mb: 2
            }}
          >
            DELTA_VIEW BOARD
          </Typography>
          <Typography 
            variant="h5" 
            sx={{
              fontFamily: "Roboto",
              color: '#455a64',
              textAlign: 'center',
              mb: 4
            }}
          >
            A limitless canvas for collaborative minds.
          </Typography>
          <Login />
        </Box>
      </Container>

      {/* Decorative circles */}
      <Box
        sx={{
          background: "rgba(255, 0, 0, 0.1)",
          width: { xs: "80px", sm: "220px" },
          height: { xs: "80px", sm: "220px" },
          borderRadius: "50%",
          position: "fixed",
          top: "-55px",
          right: { sm: "105px", xs: "20px" },
          zIndex: 1
        }}
      />

      <Box
        sx={{
          background: "rgba(242, 249, 48, 0.2)",
          width: { xs: "40px", sm: "120px" },
          height: { xs: "40px", sm: "120px" },
          borderRadius: "50%",
          position: "absolute",
          top: { sm: "220px", xs: "20px" },
          right: { sm: "5px", xs: "20px" },
          zIndex: 1
        }}
      />

      <Box
        sx={{
          background: "rgba(41, 67, 238, 0.2)",
          width: { xs: "80px", sm: "120px" },
          height: { xs: "80px", sm: "120px" },
          borderRadius: "50%",
          position: "absolute",
          top: { sm: "40px", xs: "70px" },
          right: { sm: "-55px", xs: "5px" },
          zIndex: 1
        }}
      />

      {/* Decorative images */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.6
        }}
      >
        <img
          src={p1}
          alt="Decorative 1"
          style={{
            position: 'absolute',
            top: '5%',
            left: '8%',
            width: '20vw',
            height: 'auto',
            maxWidth: '220px',
            transform: 'rotate(-5deg)'
          }}
        />
        <img
          src={p2}
          alt="Decorative 2"
          style={{
            position: 'absolute',
            top: '30%',
            left: '9%',
            width: '25vw',
            height: 'auto',
            maxWidth: '250px',
            transform: 'rotate(5deg)'
          }}
        />
        <img
          src={p3}
          alt="Decorative 3"
          style={{
            position: 'absolute',
            top: '20%',
            left: '3%',
            width: '15vw',
            height: 'auto',
            maxWidth: '180px',
            transform: 'rotate(-3deg)'
          }}
        />
      </Box>

      {/* Green circles */}
      <Box
        sx={{
          background: "rgba(129, 242, 43, 0.2)",
          width: "210px",
          height: "210px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "-1px",
          left: "-72px",
          zIndex: 1
        }}
      />
      <Box
        sx={{
          background: "rgba(129, 242, 43, 0.2)",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "220px",
          boxShadow: "4px 4px 0px rgba(0,0,0,0.1)",
          zIndex: 1
        }}
      />
      <Box
        sx={{
          background: "rgba(129, 242, 43, 0.2)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "180px",
          left: "120px",
          zIndex: 1
        }}
      />
    </Box>
  )
}
