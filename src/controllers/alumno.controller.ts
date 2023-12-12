import { Request, Response } from 'express';

import {connect} from '../database'

import {alumno} from "../interfaces/alumno";

export  async function getAlumno(req: Request, res:Response): Promise<Response> {
   const conn = await connect();
   const alumno = await conn.query ('SELECT * FROM alumno')
   return res.json(alumno[0]);
};

export async function createAlumno(req: Request, res: Response) {
    const newPost: alumno = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO alumno SET?', [newPost])
    
    return res.json({
        message: 'Alumno Created'
    })
}
export async function getAlumnos(req:Request, res:Response):Promise<Response> {
    const id = req.params.alumnoId;
    const conn = await connect();
    const alumno = await conn.query('SELECT * FROM alumno WHERE id_alumno = ?', [id]);
    return res.json(alumno[0]);
    
};

export async function deleteAlumno(req:Request, res:Response) {
    const id = req.params.alumnoId;
    const conn = await connect();
    await conn.query('DELETE FROM alumno WHERE id_alumno = ?', [id]);
    return res.json({
        message: 'Alumno deleted'
    });
    
};

export async function updateAlumno(req:Request, res:Response) {
    const id = req.params.alumnoId;
    const updateAlumno: alumno = req.body;
    const conn = await connect();
    await conn.query('UPDATE alumno set ? WHERE id_alumno = ?', [updateAlumno, id]);
    return res.json({
        message: 'Alumno update'
    });

}




