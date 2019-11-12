import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { ClothTypeModel } from '../models/clothType';

const jwt = new Jwt();

const router: Router = Router();

const clothTypeModel = new ClothTypeModel();

router.get('/', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await clothTypeModel.get(db);
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

router.get('/search', async (req: Request, res: Response) => {
  let db = req.db;
  const clothTypeId = req.query.clothTypeId;
  try {
    const result = await clothTypeModel.search(db, clothTypeId);
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

export default router;