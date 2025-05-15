import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './Database/dbConnect.js';
import authAdminRoutes from './routes/admin.routes.js'
import authUserRouetes from './routes/user.routes.js'


const app = express();
app.use(cookieParser());

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth/admin', authAdminRoutes );
app.use('/auth/user', authUserRouetes);

const server = http.createServer(app);

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
    connectDB();
});

