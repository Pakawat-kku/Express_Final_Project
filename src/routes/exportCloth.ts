import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { ExportClothModel } from '../models/exportCloth';

const jwt = new Jwt();

const router: Router = Router();

const exportClothModel = new ExportClothModel();

router.get('/exportCloth', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await exportClothModel.getExportCloth(db);
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

router.get('/exportDetail', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await exportClothModel.getExportDetail(db);
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

router.post('/insertExportCloth', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    try {
        const result: any = await exportClothModel.insertExportCloth(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/insertExportDetail', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    try {
        const result: any = await exportClothModel.insertExportDetail(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/showExportCloth', async (req: Request, res: Response) => {
  let db = req.db;
  let exportClothCode = req.body.exportClothCode;

  try {
    const result = await exportClothModel.showExportCloth(db,exportClothCode);
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

router.post('/showExportDetail', async (req: Request, res: Response) => {
  let db = req.db;
  let exportClothCode = req.body.exportClothCode;

  try {
    const result = await exportClothModel.showExportDetail(db,exportClothCode);
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