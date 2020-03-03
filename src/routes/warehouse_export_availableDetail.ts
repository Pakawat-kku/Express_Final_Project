import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { Warehouse_export_availableDetailModel } from '../models/warehouse_export_availableDetail';

const jwt = new Jwt();

const router: Router = Router();

const warehouse_export_availableDetailModel = new Warehouse_export_availableDetailModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await warehouse_export_availableDetailModel.getWarehouse_export_availableDetail(db);
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

  router.post('/getWarehouse_export_availableDetailByCode', async (req: Request, res: Response) => {
    let db = req.db;
    let warehouse_export_availableCode = req.body.warehouse_export_availableCode;
    try {
      const result = await warehouse_export_availableDetailModel.getWarehouse_export_availableDetailByCode(db,warehouse_export_availableCode);
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
  
  
  router.post('/insertWarehouse_export_availableDetail', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableDetailModel.insertWarehouse_export_availableDetail(db,data);
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
  
  router.post('/updateWarehouse_export_availableDetail', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableDetailModel.updateWarehouse_export_availableDetail(db,data);
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
  
  router.post('/searchWarehouse_export_availableDetail', async (req: Request, res: Response) => {
    let db = req.db;
    const warehouse_export_availableCode = req.body.warehouse_export_availableCode;
  
      try {
          const result: any = await warehouse_export_availableDetailModel.searchWarehouse_export_availableDetail(db, warehouse_export_availableCode);
                  
          res.send({ok: true, statusCode: HttpStatus.OK, rows: result});
  
      } catch (err) {
          res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
      }
  });
  
  router.post('/deleteWarehouse_export_availableDetail', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableDetailModel.deleteWarehouse_export_availableDetail(db,data);
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