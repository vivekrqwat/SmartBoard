import epress from 'express';
const router = epress.Router();


router.post('/signup', signup);

router.post('/login',login);

router.get('/logout', logout);



export default router;