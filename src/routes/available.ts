import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { AvailableModel } from '../models/available';

const jwt = new Jwt();

const router: Router = Router();

const availableModel = new AvailableModel();

router.post('/insertAvailable', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await availableModel.insertAvailable(db,data);
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

router.post('/updateAvailable', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  let clothId = req.body.clothId;

  try {
    const result = await availableModel.updateAvailable(db,data, clothId);
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
    let clothId = req.body.clothId;
    try {
      const result = await availableModel.getAvailable(db,clothId);
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

router.post('/searchAvailable', async (req: Request, res: Response) => {
  let db = req.db;
  let search = req.body.search;
  try {
    const result = await availableModel.getSearchAvailable(db,search);
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