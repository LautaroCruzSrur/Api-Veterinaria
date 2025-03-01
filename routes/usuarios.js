import express from 'express';
import usuariosControllers from '../controllers/usuarios.js';
import { verificarToken } from '../helpers/auth.js';

const router = express.Router();

router.post('/register', usuariosControllers.register);
router.post('/login', usuariosControllers.login);
router.get('/profile',verificarToken, usuariosControllers.profile);


export default router;