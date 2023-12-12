import {Router} from 'express';
const router = Router();

import {getAlumno, createAlumno, getAlumnos, deleteAlumno, updateAlumno} from "../controllers/alumno.controller";

router.route('/')
.get(getAlumno)
.post(createAlumno);

router.route('/:alumnoId')
    .get(getAlumnos)
    .delete(deleteAlumno)
    .put(updateAlumno)


export default router;