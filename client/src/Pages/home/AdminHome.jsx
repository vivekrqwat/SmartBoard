import React, { useEffect, useState } from 'react'
import Logout from '../../Component/Logout'
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
  const [searchTerm, setSearchTerm] = useState('');

  function dateToNumber(dateStr) {
    const parts = dateStr.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
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

  const handleInfo = (item) => {
    setCurrentItem(item);
  }

  // Manual search filter (case-insensitive)
  function isEqualIgnoreCase(a, b) {
    const charCodeA = a.charCodeAt(0);
    const charCodeB = b.charCodeAt(0);
    const normA = (charCodeA >= 65 && charCodeA <= 90) ? charCodeA + 32 : charCodeA;
    const normB = (charCodeB >= 65 && charCodeB <= 90) ? charCodeB + 32 : charCodeB;
    return normA === normB;
  }

  let manuallyFilteredData = [];
  for (let i = 0; i < sortedData.length; i++) {
    const item = sortedData[i];
    const subject = item.subject;
    const date = item.date;
    const term = searchTerm;
    let matchFound = false;

    for (let j = 0; j <= subject.length - term.length; j++) {
      let k = 0;
      while (k < term.length && isEqualIgnoreCase(subject[j + k], term[k])) {
        k++;
      }
      if (k === term.length) {
        matchFound = true;
        break;
      }
    }

    for (let j = 0; j <= date.length - term.length; j++) {
      let k = 0;
      while (k < term.length && isEqualIgnoreCase(date[j + k], term[k])) {
        k++;
      }
      if (k === term.length) {
        matchFound = true;
        break;
      }
    }

    if (matchFound || term === '') {
      manuallyFilteredData.push(item);
    }
  }

  return (
    <Box sx={{ 
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Box sx={{ position: 'relative', zIndex: 1000 }}>
            <Logout />
        </Box>
        <Box sx={{ 
            display: 'flex', 
            flex: 1,
            p: 3,
            gap: 3,
            pt: 8 // Add padding to avoid overlap with Logout
        }}>
            {/* Past Meetings Section */}
            <Paper
                elevation={3}
                sx={{
                    width: '25%',
                    p: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: '#000000',
                        textAlign: 'center',
                        pb: 2,
                        borderBottom: '2px solid #000000'
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
                        startAdornment: <SearchIcon sx={{ color: '#000000', mr: 1 }} />,
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            '&:hover fieldset': {
                                borderColor: '#000000',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000000',
                            },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#000000',
                        },
                    }}
                />
                <Divider sx={{ my: 2 }} />
                <List sx={{ overflow: 'auto', flex: 1 }}>
                  {manuallyFilteredData.length > 0 ? (
                    manuallyFilteredData.map((item, idx) => (
                      <ListItem 
                        button 
                        key={idx} 
                        onClick={() => handleInfo(item)}
                        sx={{
                          borderRadius: 2,
                          mb: 1,
                          background: currentItem === item ? '#000000' : 'transparent',
                          color: currentItem === item ? '#fff' : '#000',
                          '&:hover': {
                            background: '#333333',
                            color: '#fff',
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.subject}
                          secondary={item.date + ' | ' + item.day}
                          primaryTypographyProps={{ fontWeight: 'bold' }}
                        />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No meetings found" />
                    </ListItem>
                  )}
                </List>
            </Paper>
            {/* Meeting Details and Room Creation Section */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 2,
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                {currentItem ? (
                  <>
                    <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold', mb: 2, textAlign: 'center', textDecoration: 'underline' }}>
                      {currentItem.subject}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
                      <strong>Date:</strong> {currentItem.date}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
                      <strong>Day:</strong> {currentItem.day}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>
                      <strong>Presentees:</strong> {currentItem.participants}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="body1" sx={{ color: '#000', textAlign: 'center' }}>
                    Select a meeting to view details.
                  </Typography>
                )}
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Typography variant="h5" sx={{ color: '#000', fontWeight: 'bold', mb: 2 }}>
                  Create a Room
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: '#000',
                    color: '#fff',
                    '&:hover': {
                      background: '#333',
                    },
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500
                  }}
                >
                  Create Room
                </Button>
              </Paper>
            </Box>
        </Box>
    </Box>
  );
}

export default AdminHome;