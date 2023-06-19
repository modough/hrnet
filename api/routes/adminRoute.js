import { Router } from 'express';
import { login, signup } from '../controllers/adminController.js'


const router = Router();

router.post('/register', signup);
router.post('/login', login);

export default router;