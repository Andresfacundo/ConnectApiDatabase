import {Router} from 'express';
const router = Router();

import {getGrado, createGrado, getGrados, deleteGrado, updateGrado} from "../controllers/grado.controller";

router.route('/')
.get(getGrado)
.post(createGrado);

router.route('/:gradoId')
    .get(getGrados)
    .delete(deleteGrado)
    .put(updateGrado)


export default router;