import React, { useContext, useEffect, useState } from 'react'
import Logout from '../../Component/Logout'
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useUserLogin from '../../Hooks/useUserLogin';
import { ThemeContext } from '../../ThemeContex';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {

  const data = [
    {
      subject: "Data Structures",
      date: "18/02/2025",
      day: "Wednesday",
      participants: "4,7,8,9,12,14,15,16,36,34,37,38,39,48,49,50,56"
    },
    {
      subject: "Data Structures",
      date: "17/02/2025",
      day: "Monday",
      participants: "2,4,6,8,22,24,25,26,31,32,35,37,40,41"
    },
    {
      subject: "Data Structures",
      date: "21/02/2025",
      day: "Friday",
      participants: "1,3,4,5,7,8,14,15,19,21,25,26,27,35,38,39"
    }
  ]

  const [sortedData, setSortedData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  function dateToNumber(dateStr) {
    const parts = dateStr.split('/');
    const [day, month, year] = parts;
    return parseInt(year + month + day);
  }

  useEffect(() => {
    const temp = [...data]
    for (let i = 0; i < temp.length - 1; i++) {
      for (let j = 0; j < temp.length - i - 1; j++) {
        if (dateToNumber(temp[j].date) < dateToNumber(temp[j + 1].date)) {
          const x = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = x;
        }
      }
    }
    setSortedData(temp);
  }, []);

  const handleInfo = (item) => setCurrentItem(item);

  const navigate = useNavigate()
  const { user } = useUserLogin()
  const [roomId, setRoomId] = useState('')
  const { setusername } = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (roomId && user.fullname) {
      setusername('admin')
      navigate(`/editor/${roomId}`)
    }
  }

  const [searchTerm, setSearchTerm] = useState('');

  // simple filter instead of manual char comparison
  const manuallyFilteredData = sortedData.filter(item =>
    item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.includes(searchTerm)
  );

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f1d1d, #2b2b2b)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Logout />
      <Box sx={{
        display: 'flex',
        flex: 1,
        p: 3,
        gap: 3
      }}>
        {/* Past Meetings Section */}
        <Paper
          elevation={6}
          sx={{
            width: '25%',
            p: 3,
            backgroundColor: '#262626',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            color: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              pb: 2,
              borderBottom: '2px solid #444',
              letterSpacing: 1
            }}
          >
            Past Meetings
          </Typography>

          <TextField
            fullWidth
            placeholder="Search by subject or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: '#000', mr: 1 }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                borderRadius: 2
              }
            }}
          />

          <List sx={{ overflow: 'hidden', flex: 1 }}>
            {manuallyFilteredData.length > 0 ? (
              manuallyFilteredData.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    mb: 2,
                    background: '#1a1a1a',
                    border: '1px solid #444',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#333',
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Button
                    fullWidth
                    onClick={() => handleInfo(item)}
                    sx={{
                      textAlign: 'left',
                      p: 2,
                      color: 'white',
                      '&:hover': { backgroundColor: 'transparent' },
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          textDecoration: 'underline',
                          textDecorationThickness: '2px',
                          mb: 1,
                        }}
                      >
                        {item.subject}
                      </Typography>
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'white'
                      }}>
                        <Typography variant="body1">{item.date}</Typography>
                        <Typography variant="body1">{item.day}</Typography>
                        
                      </Box>
       <Box 
  sx={{ 
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "8px 12px",
   width:"100%",           // fixed width so wrapping happens
    wordWrap: "break-word",   // allow wrapping
    whiteSpace: "normal"      // allow text to break into multiple lines
  }}
>
  <Typography variant="body1">
    Participants: {item.participants}
  </Typography>
</Box>
                  
                    </Box>
                  </Button>
                </ListItem>
              ))
            ) : (
              <Typography sx={{ textAlign: 'center', color: '#aaa', mt: 4 }}>
                No meetings found
              </Typography>
            )}
          </List>
        </Paper>

        {/* Main Content Section */}
        <Box sx={{
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          {/* Meeting Details */}
          {currentItem && (
            <Paper
              elevation={6}
              sx={{
                p: 4,
                backgroundColor: '#1e1e1e',
                borderRadius: 3,
                maxWidth: '800px',
                mx: 'auto',
                width: '100%',
                color: 'white',
                boxShadow: "0 4px 25px rgba(0,0,0,0.5)"
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3
              }}>
                <Typography variant="h6">
                  <strong>Date :</strong> {currentItem.date}
                </Typography>
                <Typography variant="h6">
                  <strong>Day:</strong> {currentItem.day}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  mb: 4,
                  textDecoration: 'underline',
                  textDecorationThickness: '3px',
                  color: 'white'
                }}
              >
                {currentItem.subject}
              </Typography>

              <Typography variant="h6" sx={{ ml: 4 ,color:"white"}}>
                <strong>Presentees:</strong> {currentItem.participants}
              </Typography>
            </Paper>
          )}
          {/* Logo and Description Section */}
          {/* Logo Section */}
<Box sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  mb: 4
}}>
  <img 
    src="/smartwhiteboard.png" 
    alt="Smart Whiteboard Logo" 
    style={{ width: "390px", marginBottom: "12px" }} 
  />
  <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#aaa' }}>
    "Collaborate. Create. Inspire."
  </Typography>
</Box>



          {/* Create Room Section */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backgroundColor: '#1e1e1e',
              borderRadius: 3,
              maxWidth: '800px',
              mx: 'auto',
              width: '100%',
              color: 'white',
              mt: 'auto',
              mb: 4,
              boxShadow: "0 4px 25px rgba(0,0,0,0.5)"
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                variant="outlined"
                size="small"
                placeholder="Enter room ID"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    fontSize: { xs: 13, sm: 15 }
                  }
                }}
              />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
              }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Want to create a Room? Click below
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    backgroundColor: '#df8f19',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
                    '&:hover': {
                      backgroundColor: '#ffc107',
                    }
                  }}
                >
                  Create a room
                </Button>
              </Box>
            </form>
          </Paper>
        

        </Box>
      </Box>
    </Box>
  )
}

export default AdminHome
