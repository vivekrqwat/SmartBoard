import React from 'react'
import Login from '../../Component/HomepageComponent/Login'
import Home from '../Home'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../authContext/AuthContext'
import Logout from '../../Component/Logout'

const UserHome = () => {

  return (
    <div className='container-fluid p-0 m-0'>
      <Logout />
      <Home />
    </div>
  )
}

export default UserHome;