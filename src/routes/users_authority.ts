import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { Users_AuthorityModel } from '../models/user_authority';

const jwt = new Jwt();

const router: Router = Router();

const users_authorityModel = new Users_AuthorityModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await users_authorityModel.get(db);
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
    let Users_userId = req.body.Users_userId;
    try {
      const result = await users_authorityModel.getById(db,Users_userId);
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
      const result = await users_authorityModel.insert(db,data);
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
      const result = await users_authorityModel.update(db,data);
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

  router.post('/cancel', async (req: Request, res: Response) => {
    let db = req.db;
    let Users_userId = req.body.Users_userId;
    try {
      const result = await users_authorityModel.cancel(db,Users_userId);
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

  router.post('/cancelById', async (req: Request, res: Response) => {
    let db = req.db;
    let Users_userId = req.body.Users_userId;
    let Authority_aId = req.body.Authority_aId;
    try {
      const result = await users_authorityModel.cancelById(db,Users_userId,Authority_aId);
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