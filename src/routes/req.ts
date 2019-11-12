import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import { ReqModel } from '../models/req';
import * as HttpStatus from 'http-status-codes';
import { stat } from 'fs';
import * as moment from 'moment';

const jwt = new Jwt();

const router: Router = Router();

const reqModel = new ReqModel();

router.get('/stock', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await reqModel.getStock(db);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.get('/showReq', async (req: Request, res: Response) => {
  let db = req.db;
  const userId = req.query.userId;
  try {
    const result = await reqModel.showReq(db, userId);
    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result});
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.get('/showReqWait', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.query.wardId;
  try {
    const result = await reqModel.showReqWait(db, wardId);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result});
  } catch (error) {
    console.log(error.message);
    res.send({
      ok: false,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
});

router.post('/insertReq', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    try {
        const result: any = await reqModel.insertReq(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/insertRealReq', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    try {
        const result: any = await reqModel.insertRealReq(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});


export default router;