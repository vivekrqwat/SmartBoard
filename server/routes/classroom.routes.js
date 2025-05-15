
import express from 'express';
const router = express.Router();

import { create, join } from '../controllers/classroom.controller.js';


router.post('/api/createroom/:id', create);

router.post('/api/joinroom/:id', join);


export default router;