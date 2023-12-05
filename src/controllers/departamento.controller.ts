// import { Request, Response } from 'express';

// import {connect} from '../database'

// import {departamento} from "../interfaces/departamento";

// export  async function getDepartamento(req: Request, res:Response): Promise<Response> {
//    const conn = await connect();
//    const departamento = await conn.query ('SELECT * FROM departamento')
//    return res.json(departamento[0]);
// };

// export async function createDepartamento(req: Request, res: Response) {
//     const newPost: departamento = req.body;
//     const conn = await connect();
//     await conn.query('INSERT INTO departamento SET?', [newPost])
    
//     return res.json({
//         message: 'Departamento Created'
//     })
// }
// export async function getDepartamentos(req:Request, res:Response):Promise<Response> {
//     const id = req.params.DepartamentoId;
//     const conn = await connect();
//     const posts = await conn.query('SELECT * FROM departamento WHERE id_departamento = ?', [id]);
//     return res.json(posts[0]);
    
// };

// export async function deleteDepartamento(req:Request, res:Response) {
//     const id = req.params.DepartamentoId;
//     const conn = await connect();
//     await conn.query('DELETE FROM departamento WHERE id_departamento = ?', [id]);
//     return res.json({
//         message: 'Departamento deleted'
//     });
    
// };

// export async function updateDepartamento(req:Request, res:Response) {
//     const id = req.params.DepartamentoId;
//     const updateDepartamento: departamento = req.body;
//     const conn = await connect();
//     await conn.query('UPDATE departamento set ? WHERE id_departamento = ?', [updateDepartamento, id]);
//     return res.json({
//         message: 'departamento update'
//     });

    
// }


