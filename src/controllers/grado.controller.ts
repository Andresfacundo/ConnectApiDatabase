import { Request, Response } from 'express';

import {connect} from '../database'

import {grado} from "../interfaces/grado";

export  async function getGrado(req: Request, res:Response): Promise<Response> {
   const conn = await connect();
   const grado = await conn.query ('SELECT * FROM grado')
   return res.json(grado[0]);
};

export async function createGrado(req: Request, res: Response) {
    const newPost: grado = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO grado SET?', [newPost])
    
    return res.json({
        message: 'Grado Created'
    })
}
export async function getGrados(req:Request, res:Response):Promise<Response> {
    const id = req.params.gradoId;
    const conn = await connect();
    const grado = await conn.query('SELECT * FROM grado WHERE id_grado = ?', [id]);
    return res.json(grado[0]);
    
};

export async function deleteGrado(req:Request, res:Response) {
    const id = req.params.gradoId;
    const conn = await connect();
    await conn.query('DELETE FROM grado WHERE id_grado = ?', [id]);
    return res.json({
        message: 'Grado deleted'
    });
    
};

export async function updateGrado(req:Request, res:Response) {
    const id = req.params.gradoId;
    const updateGrado: grado = req.body;
    const conn = await connect();
    await conn.query('UPDATE grado set ? WHERE id_grado = ?', [updateGrado, id]);
    return res.json({
        message: 'Grado update'
    });

}




