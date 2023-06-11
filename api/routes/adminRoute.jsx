import { Router } from 'express';
const router = Router();


router.post('/signup', adminControler.signup);
router.post('/login', adminControler.login);

export default router;