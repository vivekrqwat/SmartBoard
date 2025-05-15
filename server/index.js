const { Socket } = require("dgram");
const express=require("express");
const app=express();
const http=require("http");
const {Server}=require("socket.io")
const server=http.createServer(app)
const io=new Server(server);

// Store admin information
const roomAdmins = new Map();

io.on("connection",socket=>{
    console.log("you socket id is",socket.id)
    socket.on("join",({roomid})=>{
        socket.join(roomid)
        console.log(`${socket.id} joined ${roomid}`)
    })

    socket.on('drawing',({roomid,data})=>{
        console.log("drawing",roomid)
        socket.to(roomid).emit("r-drawing",data)
    })

    socket.on('send-attendance',({message,roomid})=>{
        console.log(message+"to"+roomid);
        socket.to(roomid).emit('r-attendance',{message});
    })
    

    socket.on('sendreq',({message,roomid})=>{
        console.log('message name is ',message);
        socket.to(roomid).emit('r-sendreq',{message})
    })

    socket.on('mark',({rollnumber,roomid})=>{
        console.log("meassagw",rollnumber);
        socket.to(roomid).emit("r-mark",{rollnumber});
    })

    socket.on("leave",({roomid})=>{
        socket.leave(roomid)
        console.log("leave")
    })

    // Handle admin leaving
    socket.on('admin-leaving', ({ roomid }) => {
        // Notify all participants in the room that admin has left
        io.to(roomid).emit('admin-left');
        console.log(`Admin left room ${roomid}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
})
server.listen(5000,()=>{
    console.log("server is listing")
})