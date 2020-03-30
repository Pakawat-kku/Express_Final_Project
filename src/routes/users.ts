import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { UsersModel } from '../models/users';
import * as moment from 'moment';

const jwt = new Jwt();

const router: Router = Router();

const usersModel = new UsersModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      moment.locale('th');
      const result = await usersModel.get(db);
      for (const item of result) {
        item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
        item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
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

  router.get('/searchNotApprove', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await usersModel.searchNotApprove(db);
      for (const item of result) {
        item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
        item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
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

  router.get('/searchApprove', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await usersModel.searchApprove(db);
      for (const item of result) {
        item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
        item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
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

  router.post('/getUserId', async (req: Request, res: Response) => {
    let db = req.db;
    const userId = req.body.userId;
    
      try {
          const result: any = await usersModel.getUserId(db,userId);
                  
          res.send({ok: true, statusCode: HttpStatus.OK, rows: result});
  
      } catch (err) {
          res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
      }
  });

router.post('/', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  
    try {
        const result: any = await usersModel.insertUsers(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/approveUser', async (req: Request, res: Response) => {
  let db = req.db;
  const username = req.body.username;
  const dateApprove = req.body.dateApprove;
  
    try {
        const result: any = await usersModel.approveUser(db,username,dateApprove);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/cancelUser', async (req: Request, res: Response) => {
  let db = req.db;
  const username = req.body.username;
  
    try {
        const result: any = await usersModel.cancelUser(db,username);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchByFirstname', async (req: Request, res: Response) => {
  let db = req.db;
  const search = req.body.search;
    try {
        const result: any = await usersModel.searchUserByFirstname(db,search);
        for (const item of result) {
          item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
          item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
      }
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchByLastname', async (req: Request, res: Response) => {
  let db = req.db;
  const search = req.body.search;
    try {
        const result: any = await usersModel.searchUserByLastname(db,search);
        for (const item of result) {
          item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
          item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
      }
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchByUsername', async (req: Request, res: Response) => {
  let db = req.db;
  const search = req.body.search;
    try {
        const result: any = await usersModel.searchUserByUsername(db,search);
        for (const item of result) {
          item.dateSignup = moment(item.dateSignup).add(543,'years').format("DD MMMM YYYY");
          item.dateApprove = moment(item.dateApprove).add(543,'years').format("DD MMMM YYYY");
      }
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});


export default router;