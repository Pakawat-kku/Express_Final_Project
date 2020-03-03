import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { Warehouse_export_availableModel } from '../models/warehouse_export_available';

const jwt = new Jwt();

const router: Router = Router();

const warehouse_export_availableModel = new Warehouse_export_availableModel();

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;
    try {
      const result = await warehouse_export_availableModel.getWarehouse_export_available(db);
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
  
  
  router.post('/getWarehouse_export_availableByCode', async (req: Request, res: Response) => {
    let db = req.db;
    let warehouse_export_availableCode = req.body.warehouse_export_availableCode;
    try {
      const result = await warehouse_export_availableModel.getWarehouse_export_availableByCode(db,warehouse_export_availableCode);
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
  
  router.post('/insertWarehouse_export_available', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableModel.insertWarehouse_export_available(db,data);
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
  
  router.post('/updateWarehouse_export_available', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableModel.updateWarehouse_export_available(db,data);
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
  
  router.post('/searchWarehouse_export_available', async (req: Request, res: Response) => {
    let db = req.db;
    const warehouse_export_availableCode = req.body.warehouse_export_availableCode;
  
      try {
          const result: any = await warehouse_export_availableModel.searchWarehouse_export_available(db, warehouse_export_availableCode);
                  
          res.send({ok: true, statusCode: HttpStatus.OK, rows: result});
  
      } catch (err) {
          res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
      }
  });
  
  router.post('/deleteWarehouse_export_available', async (req: Request, res: Response) => {
    let db = req.db;
    let data = req.body.data;
    try {
      const result = await warehouse_export_availableModel.deleteWarehouse_export_available(db,data);
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

