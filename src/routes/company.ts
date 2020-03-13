import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { CompanyModel } from '../models/company';

const jwt = new Jwt();

const router: Router = Router();

const companyModel = new CompanyModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await companyModel.getCompany(db);
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
      const result = await companyModel.insertCompany(db, data);
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
      const result = await companyModel.updateCompany(db, data);
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