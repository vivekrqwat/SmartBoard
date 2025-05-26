import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField, Typography, Paper, Container } from '@mui/material'
import { ThemeContext } from '../../ThemeContex'

export default function Login() {
  const navigate = useNavigate()
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')
  const { setusername } = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (roomId && username) {
      setusername(username)
      navigate(`/editor/${roomId}`)
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            width: '100%',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 2
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            sx={{
              mb: 3,
            textAlign: 'center',
              color: '#000000',
              fontWeight: 500
          }}
        >
            Join Room
        </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
            display: 'flex',
            flexDirection: 'column',
              gap: 2
          }}
        >
          <TextField
              required
            fullWidth
              label="Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#000000',
                },
                '&:hover fieldset': {
                    borderColor: '#333333',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#000000',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#000000',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#000000',
              },
            }}
          />
          <TextField
              required
            fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#000000',
                },
                '&:hover fieldset': {
                    borderColor: '#333333',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#000000',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#000000',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#000000',
              },
            }}
          />
          <Button
            type="submit"
              fullWidth
            variant="contained"
            sx={{
                mt: 2,
                py: 1.5,
                background: '#000000',
                color: '#ffffff',
              '&:hover': {
                  background: '#333333',
              },
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500
            }}
          >
            Join Room
          </Button>
      </Box>
    </Paper>
      </Container>
    </Box>
  )
}
