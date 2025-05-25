import { Box, Button } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ReactSketchCanvas } from "react-sketch-canvas";

import Drawer1 from './Component/Dashboardcomponent/Drawer1';
import Tools from './Component/Dashboardcomponent/Tools';
import { ThemeContext } from './ThemeContex';
import { initsocket } from './socket';
import Attendance from './Component/form/Attendance';
import { ToastContainer, toast } from 'react-toastify';
import Request from './Component/Request/Requset';
import { Atd_popUp } from './Component/Atd_pop_up/Atd_popUp';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const socketref = useRef(null);
  const canvasRef = useRef(null);
  const [access, setacess] = useState(false);
  const navigate = useNavigate();
  const [message, setmessage] = useState('');
  const { pen, penColor, username, setatd, atd, mark, setmark, roomid, student, setstudent } = useContext(ThemeContext);

  const boxstyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "10px"
  }

  const handleChange = async () => {
    if (!canvasRef.current || !socketref.current) return;
    if (username !== 'admin' && !access) return;
    const paths = await canvasRef.current.exportPaths();
    socketref.current.emit('drawing', {
      roomid: roomid,
      data: paths,
    });
  };

  const changeMark = (number) => {
    let index = Number(number)
    let updatemark = JSON.parse(localStorage.getItem('mark'));
    updatemark[index] += 1;
    localStorage.setItem('mark', JSON.stringify(updatemark));
    setmark(updatemark);
  }

  useEffect(() => {
    const init = async () => {
      socketref.current = await initsocket();
      socketref.current.emit('join', {
        id: roomid,
        username: username
      });
      
      socketref.current.on("r-drawing", (data) => {
        if (canvasRef.current) {
          canvasRef.current.loadPaths(data);
        }
      });

      socketref.current.on('student', ({ id, username }) => {
        if (!id || !username) return;
        setstudent(prev => {
          const alreadyExists = prev.some(student => student.id === id && student.username === username);
          if (alreadyExists) return prev;
          return [...prev, { id, username }];
        });
      });

      socketref.current.on('disconnect-del', ({ username, id }) => {
        if (!id) return;
        setstudent(prev => prev.filter((i) => i.id && i.id !== id));
      });

      socketref.current.on('r-attendance', ({ message }) => {
        if (username != "admin" && username != undefined) {
          toast(<Attendance socketref={socketref} />);
        }
      });

      socketref.current.on('r-sendreq', ({ message, socketid }) => {
        setatd(prv => [...prv, { name: message, socketid: socketid }]);
        if (username == 'admin') {
          toast(<Request name={'student'} socketid={socketid} socketref={socketref} />, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });

      socketref.current.on("access-g", ({ value }) => {
        setacess(value);
      });

      socketref.current.on('r-mark', ({ rollnumber }) => {
        changeMark(rollnumber);
      });
    }

    init();

    return () => {
      if (socketref.current) {
        socketref.current.emit('leave', { roomid: roomid });
      }
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (socketref.current && username == 'admin') {
      socketref.current.emit('send-attendance', {
        message: "attendance is sended",
        roomid: roomid
      });
    }
  }

  const sendRequest = (e) => {
    if (socketref.current) {
      socketref.current.emit('sendreq', {
        message: username,
        roomid: roomid,
        socketid: socketref.current.id
      });
    }
  }

  const leave = () => {
    if (username == 'admin') {
      const mark1 = JSON.parse(localStorage.getItem('mark')) || [];
      let message = "";
      mark1.forEach((i, key) => {
        if (i >= 2) message += `${key},`;
      });

      toast(<Atd_popUp message={message || 'None'} socketref={socketref} />, {
        position: 'top-right',
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: true,
      });
    } else {
      const updatearray = student.filter((i) => i.name != username);
      setstudent(updatearray);
      socketref.current.emit('leave', { roomid });
      localStorage.removeItem('username');
      navigate('/');
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Drawer1 />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Tools />
          <Box sx={{ flex: 1, position: 'relative' }}>
            <ReactSketchCanvas
              ref={canvasRef}
              strokeWidth={pen}
              strokeColor={penColor}
              onChange={handleChange}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Box sx={boxstyle}>
            {username === 'admin' ? (
              <Button
                variant="contained"
                onClick={sendMessage}
                sx={{
                  background: '#1A8899',
                  color: 'white',
                  '&:hover': {
                    background: '#156d7a',
                  },
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                Send Attendance
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={sendRequest}
                sx={{
                  background: '#1A8899',
                  color: 'white',
                  '&:hover': {
                    background: '#156d7a',
                  },
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                Send Request
              </Button>
            )}
            <Button
              variant="contained"
              onClick={leave}
              sx={{
                background: '#ed4f41',
                color: 'white',
                '&:hover': {
                  background: '#d43f31',
                },
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              Leave Room
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}
