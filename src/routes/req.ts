import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import { ReqModel } from '../models/req';
import * as HttpStatus from 'http-status-codes';
import { stat } from 'fs';
import * as moment from 'moment';

const jwt = new Jwt();

const router: Router = Router();

const reqModel = new ReqModel();

router.get('/stock', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await reqModel.getStock(db);
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

router.get('/showReq', async (req: Request, res: Response) => {
  let db = req.db;
  const userId = req.query.userId;
  try {
    const result = await reqModel.showReq(db, userId);
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

router.post('/showReqWait', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.body.wardId;
  try {
    const result = await reqModel.showReqWait(db, wardId);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

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

router.post('/showReqWaitDetail', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result = await reqModel.showReqWaitDetail(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

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

router.get('/showReqWaitDetailOnly', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.query.requisitionCode;

  try {
    const result = await reqModel.showReqWaitDetailOnly(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

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

router.get('/showReqWaitAdmin', async (req: Request, res: Response) => {
  let db = req.db;

  try {
    const result = await reqModel.showReqWaitAdmin(db);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

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

router.get('/showReqWaitDetailAdmin', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.query.requisitionCode;

  try {
    const result = await reqModel.showReqWaitDetailAdmin(db , requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
    }

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

router.post('/approveReq', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result: any = await reqModel.approveReq(db,requisitionCode);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/notApproveList', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;

    try {
        const result: any = await reqModel.notApproveList(db,requisitionCode, clothId);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/notApproveReq', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;

    try {
        const result: any = await reqModel.notApproveReq(db,requisitionCode);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/editReq', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;
    const amountCloth = req.body.amountCloth;

    try {
        const result: any = await reqModel.editReq(db,requisitionCode, clothId, amountCloth);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});



router.post('/insertReq', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    try {
        const result: any = await reqModel.insertReq(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/insertRealReq', async (req: Request, res: Response) => {
  let db = req.db;
    const data = req.body.data;
    console.log('data' , data);
    
    try {
        const result: any = await reqModel.insertRealReq(db,data);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.get('/showReqApprove', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await reqModel.showReqApprove(db);
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

router.post('/showReqDetailApprove', async (req: Request, res: Response) => {
  let db = req.db;
  let requisitionCode = req.body.requisitionCode;

  try {
    const result = await reqModel.showReqDetailApprove(db,requisitionCode);
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

router.post('/statusWithdraw', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result: any = await reqModel.statusWithdraw(db,requisitionCode);
      } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchReq', async (req: Request, res: Response) => {
  let db = req.db;
  const searchWard = req.body.searchWard;

    try {
        const result: any = await reqModel.searchReq(db, searchWard);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchReqId', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;

    try {
        const result: any = await reqModel.searchReqId(db, requisitionCode);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});


router.post('/searchTypeApprove', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.body.wardId;

    try {
        const result: any = await reqModel.searchTypeApprove(db, wardId);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});


router.post('/searchTypeNotApprove', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.body.wardId;

    try {
        const result: any = await reqModel.searchTypeNotApprove(db, wardId);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/statusWithdrawSuccess', async (req: Request, res: Response) => {
  let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result: any = await reqModel.statusWithdrawSuccess(db,requisitionCode);
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});



export default router;