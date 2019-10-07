import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import { ReqModel } from '../models/req';
import * as HttpStatus from 'http-status-codes';
import { stat } from 'fs';

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
  try {
    const result = await reqModel.showReq(db);
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

router.post("/updateReg", async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
 console.log('value', data);
 
  try {
      let result = await reqModel.updateReq(db, data);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (error) {
      console.log(error.message);
      res.send({
          ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message
      });
  }
});

router.post('/deleteReq', async (req: Request, res: Response) => {
  let db = req.db;
  const cId = req.body.cId;
  const status = req.body.status;
  try {
      const result: any = await reqModel.delReq(db, cId, status);
      res.send({ok: true, statusCode: HttpStatus.OK, rows: result});
  } catch (err) {
      res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
  }
});


export default router;