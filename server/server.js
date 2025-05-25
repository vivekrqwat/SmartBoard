import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './Database/dbConnect.js';
import authAdminRoutes from './routes/admin.routes.js';
import authUserRoutes from './routes/user.routes.js';
import classRoomRoutes from './routes/classroom.routes.js';

import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Socket.IO logic
const roomAdmins = new Map();
const userSocket=new Map();
// io.on('connection', (socket) => {
//     console.log('Socket connected:', socket.id);

//     socket.on('join', ({ roomid ,username}) => {
//         socket.join(roomid);
//          userSocket.set(username,socket.id);
//          console.log(userSocket)
//         console.log(`${socket.id} joined ${roomid}`);
//         let id=socket.id;
//       if(!username)return
//         socket.to(roomid).emit('student',userSocket);
//  console.log(username,"has id ",id)
       
//     });

//     socket.on('drawing', ({ roomid, data }) => {
//         socket.to(roomid).emit('r-drawing', data);
//     });

//       socket.on('send-attendance',({message,roomid})=>{
//         console.log(message+"to"+roomid);
//         socket.to(roomid).emit('r-attendance',{message});
//     })

//    socket.on('sendreq',({message,roomid,socketid})=>{
//         console.log('message name is ',message,roomid);
//         socket.to(roomid).emit('r-sendreq',{message,socketid})
//     })

//      socket.on('mark',({rollnumber,roomid})=>{
//         console.log("meassagw",rollnumber);
//         socket.to(roomid).emit("r-mark",{rollnumber});
//     })

//     socket.on('leave', ({ roomid }) => {
//         socket.leave(roomid);
//         console.log(`${socket.id} left ${roomid}`);
//     });

  
  
 


//      //handle access
//     socket.on("access",({target,roomid,value})=>{
//         console.log(target);
//         if(target){
//             const socketinrooom=io.sockets.adapter.rooms.get(roomid);
//             if(socketinrooom?.has(target)){
//                 console.log("granted",target);
//                 io.to(target).emit("access-g",{value})
//             }else{
//                 console.log("target is not in room");
//             }
//         }else{
//             console.log("target not found");
//         }
//     });
   


//     socket.on('disconnect', () => {
//         const userId = socket.data.userId;
//         if (userId && userSocketMap.has(userId)) {
//             userSocketMap.delete(userId);  // ✅ Remove from map
//             console.log(`Socket ${socket.id} disconnected. User ${userId} removed from map.`);
//         } else {
//             console.log(`Socket ${socket.id} disconnected (no userId).`);
//         }
//         socket.disconnect(true);

//         console.log(`Socket ${socket.id} disconnected`);
//     });
// });

// API routes
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('join', ({ roomid ,username }) => {
        if (!username) return;

        socket.join(roomid);
        socket.username = username; // Attach username to socket
        userSocket.set(username, socket.id);
        console.log(userSocket);
        console.log(`${socket.id} joined ${roomid}`);
       if(!username)return;
       let id=socket.id
        socket.to(roomid).emit('student',{id,username});
 console.log(username,"has id ",id)
    });

    socket.on('drawing', ({ roomid, data }) => {
        socket.to(roomid).emit('r-drawing', data);
    });

    socket.on('send-attendance', ({ message, roomid }) => {
        console.log(message + " to " + roomid);
        socket.to(roomid).emit('r-attendance', { message });
    });

    socket.on('sendreq', ({ message, roomid, socketid }) => {
        console.log('message name is ', message, roomid);
        socket.to(roomid).emit('r-sendreq', { message, socketid });
    });

    socket.on('mark', ({ rollnumber, roomid }) => {
        console.log("message", rollnumber);
        socket.to(roomid).emit("r-mark", { rollnumber });
    });

    socket.on('leave', ({ roomid }) => {
        // socket.leave(roomid);
        socket.disconnect(true);
        console.log(`${socket.id} left ${roomid}`);
    });

    socket.on("access", ({ target, roomid, value }) => {
        if (target) {
            const socketsInRoom = io.sockets.adapter.rooms.get(roomid);
            if (socketsInRoom?.has(target)) {
                console.log("Granted access to", target);
                io.to(target).emit("access-g", { value });
            } else {
                console.log("Target is not in room");
            }
        } else {
            console.log("Target not found");
        }
    });

    socket.on('disconnect', () => {
        const username = socket.username;
        if (username && userSocket.has(username)) {
            userSocket.delete(username);
            let id=socket.id;
            console.log(id,"id is");
            socket.broadcast.emit('disconnect-del',{username,id})
            console.log(`Socket ${socket.id} disconnected. User ${username} removed from map.`);
        } else {
            console.log(`Socket ${socket.id} disconnected (no username).`);
        }
    });
});

app.use('/auth/admin', authAdminRoutes);
app.use('/auth/user', authUserRoutes);
app.use('/classroom', classRoomRoutes);

// Start server
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
    connectDB();
});
