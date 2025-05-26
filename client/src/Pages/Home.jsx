import React from 'react'
import Login from '../Component/HomepageComponent/Login'
import { Box, Typography, Container } from '@mui/material'

export default function Home() {
  return (
    <Box 
      width="100%" 
      position="relative" 
      overflow="hidden" 
      sx={{
        background: '#000000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box 
          width="100%" 
          display="flex" 
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={2}
          sx={{
            flex: 1,
            padding: { xs: '10px', sm: '10px' }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', sm: '5rem', md: '7rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
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
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              mb: 4
            }}
          >
            A limitless canvas for collaborative minds.
          </Typography>
          <Login />
        </Box>
      </Container>
    </Box>
  )
}
