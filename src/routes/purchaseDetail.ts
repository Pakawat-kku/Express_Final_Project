import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { PurchaseDetailModel } from '../models/purchaseDetail';
const moment = require('moment');

const jwt = new Jwt();
const router: Router = Router();
const purchaseDetailModel = new PurchaseDetailModel();
moment.locale('th');

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await purchaseDetailModel.get(db);
      for (const item of result) {
        item.purchaseDate = moment(item.purchaseDate).format('YYYY-MM-DD HH:mm:ss');
      }
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

router.post('/', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await purchaseDetailModel.insert(db,data);
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

router.post('/getById', async (req: Request, res: Response) => {
    let db = req.db;
    let purchaseId = req.body.purchaseId;
    try {
      const result = await purchaseDetailModel.getById(db, purchaseId);
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


export default router;