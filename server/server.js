import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './Database/dbConnect.js';
import authAdminRoutes from './routes/admin.routes.js'

dotenv.config();

const app = express();
app.use(cookieParser());

app.use('/auth/admin', authAdminRoutes );

const server = http.createServer(app);

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
    connectDB();
});

