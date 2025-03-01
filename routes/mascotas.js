import express from 'express';
import mascotasControllers from '../controllers/mascotas.js';
import {verificarToken} from '../helpers/auth.js';

const router = express.Router();

router.get('/',mascotasControllers.getAll);
router.get('/:id',mascotasControllers.getOne);
router.post('/',mascotasControllers.create);
router.put('/:id',verificarToken ,mascotasControllers.update);
router.delete('/:id',verificarToken, mascotasControllers.delete);


export default router;