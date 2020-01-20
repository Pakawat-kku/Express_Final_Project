import {  WardModel } from '../models/ward';
import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';

const jwt = new Jwt();

const router: Router = Router();

const wardModel = new WardModel();

router.get('/', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await wardModel.get(db);
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
    const result = await wardModel.insert(db,data);
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

router.post('/update', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await wardModel.update(db,data);
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