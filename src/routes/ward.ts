import { WardModel } from '../models/ward';
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
    const result = await wardModel.getWard(db);
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

router.post('/getWardBlank', async (req: Request, res: Response) => {
  let db = req.db;
  let userId = req.body.userId;
  try {
    const result = await wardModel.getWardBlank(db, userId);
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

router.post('/getWardById', async (req: Request, res: Response) => {
  let db = req.db;
  let userId = req.body.userId;
  try {
    const result = await wardModel.getWardById(db, userId);
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

router.post('/insertWard', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await wardModel.insertWard(db, data);
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

router.post('/updateWard', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await wardModel.updateWard(db, data);
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

router.post('/searchWard', async (req: Request, res: Response) => {
  let db = req.db;
  const searchWard = req.body.searchWard;

  try {
    const result: any = await wardModel.searchWard(db, searchWard);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/deleteWard', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await wardModel.deleteWard(db, data);
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

router.post('/getPorter', async (req: Request, res: Response) => {
  let db = req.db;
  let Users_userId = req.body.Users_userId;
  try {
    const result = await wardModel.getPorter(db, Users_userId);
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

router.post('/getOverview', async (req: Request, res: Response) => {
  let db = req.db;
  let date1 = req.body.date1;
  let date2 = req.body.date2;
  try {
    const result = await wardModel.getOverview(db, date1, date2);
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