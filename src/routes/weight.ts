import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WeightModel } from '../models/weight';

const jwt = new Jwt();

const router: Router = Router();

const weightModel = new WeightModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await weightModel.getWeight(db);
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

  router.post('/getWeightByCode', async (req: Request, res: Response) => {
    let db = req.db;
    let importCode = req.body.importCode;
    try {
      const result = await weightModel.getWeightByCode(db,importCode);
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

router.post('/insertWeight', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  try {
    const result = await weightModel.insertWeight(db,data);
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

router.post('/updateWeight', async (req: Request, res: Response) => {
  let db = req.db;
  let data = req.body.data;
  let clothId = req.body.clothId;

  try {
    const result = await weightModel.updateWeight(db,data);
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

 
// router.post('/search', async (req: Request, res: Response) => {
//   let db = req.db;
//   let search = req.body.search;
//   try {
//     const result = await weightModel.getSearchWeight(db,search);
//     res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
//   } catch (error) {
//     console.log(error.message);
//     res.send({
//       ok: false,
//       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//       message: error.message
//     });
//   }
// });

export default router;