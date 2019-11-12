import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { UsersModel } from '../models/users';

const jwt = new Jwt();

const router: Router = Router();

const usersModel = new UsersModel();

router.post('/insertUsers', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  console.log('data' , data);
  
    try {
        const result: any = await usersModel.insertUsers(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

export default router;