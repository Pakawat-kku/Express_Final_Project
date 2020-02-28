import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WareHouseModel } from '../models/wareHouse';

const jwt = new Jwt();

const router: Router = Router();

const wareHouseModel = new WareHouseModel();

router.post('/insertWareHouse', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await wareHouseModel.insertWareHouse(db,data);
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

router.post('/updateWareHouse', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  let clothId = req.body.clothId;

  try {
    const result = await wareHouseModel.updateWareHouse(db,data, clothId);
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
      const result = await wareHouseModel.getWareHouse(db,clothId);
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

  router.post('/allWareHouse', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await wareHouseModel.getAllWareHouse(db);
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

router.post('/search', async (req: Request, res: Response) => {
  let db = req.db;
  let search = req.body.search;
  try {
    const result = await wareHouseModel.getSearchWareHouse(db,search);
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