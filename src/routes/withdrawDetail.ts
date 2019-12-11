import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WithdrawDetailModel } from '../models/withdrawDetail';

const jwt = new Jwt();

const router: Router = Router();

const withdrawDetailModel = new WithdrawDetailModel();

router.post('/', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  
    try {
        const result: any = await withdrawDetailModel.insertWithdrawDetail(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});


export default router;