import React from 'react'
import Login from '../../Component/HomepageComponent/Login'
import Home from '../Home'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../authContext/AuthContext'
import Logout from '../../Component/Logout'
import { Box } from '@mui/material'

const UserHome = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', p: 0, m: 0 }}>
      <Logout />
      <Home />
    </Box>
  )
}

export default UserHome;