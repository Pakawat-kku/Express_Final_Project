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

router.post('/showReqWait', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.body.wardId;
  try {
    const result = await reqModel.showReqWait(db, wardId);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.post('/showReqWaitDetail', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result = await reqModel.showReqWaitDetail(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.get('/showReqWaitDetailOnly', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.query.requisitionCode;

  try {
    const result = await reqModel.showReqWaitDetailOnly(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.get('/showReqWaitDetailDept', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.query.requisitionCode;

  try {
    const result = await reqModel.showReqWaitDetailDept(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.get('/showReqWaitAdmin', async (req: Request, res: Response) => {
  let db = req.db;

  try {
    const result = await reqModel.showReqWaitAdmin(db);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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


router.get('/showReqWaitAdminApprove', async (req: Request, res: Response) => {
  let db = req.db;

  try {
    const result = await reqModel.showReqWaitAdminApprove(db);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.get('/showReqWaitAdminNotApprove', async (req: Request, res: Response) => {
  let db = req.db;

  try {
    const result = await reqModel.showReqWaitAdminNotApprove(db);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.get('/showReqWaitDetailAdmin', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.query.requisitionCode;

  try {
    const result = await reqModel.showReqWaitDetailAdmin(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.post('/approveReq', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result: any = await reqModel.approveReq(db, requisitionCode);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/notApproveList', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  const clothId = req.body.clothId;

  try {
    const result: any = await reqModel.notApproveList(db, requisitionCode, clothId);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/notApproveReq', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  const clothId = req.body.clothId;

  try {
    const result: any = await reqModel.notApproveReq(db, requisitionCode);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/editReq', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  const clothId = req.body.clothId;
  const amountCloth = req.body.amountCloth;

  try {
    const result: any = await reqModel.editReq(db, requisitionCode, clothId, amountCloth);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});



router.post('/insertReq', async (req: Request, res: Response) => {
  let db = req.db;
  const data = req.body.data;
  try {
    const result: any = await reqModel.insertReq(db, data);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
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

router.post('/updateAmountReal', async (req: Request, res: Response) => {
    let db = req.db;
    const clothId = req.body.clothId;
    const requisitionCode = req.body.requisitionCode;
    const amountClothReal = req.body.amountClothReal;    
    try {
        const result: any = await reqModel.updateAmountReal(db,clothId, requisitionCode , amountClothReal );
                
        res.send({ok: true, statusCode: HttpStatus.OK, rows: result});

    } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.get('/showReqApprove', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result = await reqModel.showReqApprove(db);
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

router.post('/showReqDetailApprove', async (req: Request, res: Response) => {
  let db = req.db;
  let requisitionCode = req.body.requisitionCode;

  try {
    const result = await reqModel.showReqDetailApprove(db, requisitionCode);
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

router.post('/statusWithdraw', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result: any = await reqModel.statusWithdraw(db, requisitionCode);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/searchReq', async (req: Request, res: Response) => {
  let db = req.db;
  const searchWard = req.body.searchWard;
    const result: any = await reqModel.searchReqId(db, searchWard);
    const requisitionCode = req.body.requisitionCode;
    try {
        const result: any = await reqModel.statusWithdraw(db,requisitionCode);
      } catch (err) {
        res.send({ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message});
    }
});

router.post('/searchWard', async (req: Request, res: Response) => {
  let db = req.db;
  const searchWard = req.body.searchWard;

    try {
        const result: any = await reqModel.searchWard(db, searchWard);
                
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

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/statusWithdrawSuccess', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result: any = await reqModel.statusWithdrawSuccess(db, requisitionCode);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/statusDetailWithdrawSuccess', async (req: Request, res: Response) => {
  let db = req.db;
  const id = req.body.id;
  try {
    const result: any = await reqModel.updateStatusDetailWithdrawSuccess(db, id);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/getByWard', async (req: Request, res: Response) => {
  let db = req.db;
  const Ward_wardId = req.body.Ward_wardId;
  try {
    const result: any = await reqModel.getByWard(db, Ward_wardId);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/getByWardStatusWD1', async (req: Request, res: Response) => {
  let db = req.db;
  const Ward_wardId = req.body.Ward_wardId;
  try {
    const result: any = await reqModel.getByWardStatusWD1(db, Ward_wardId);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/getNapkin', async (req: Request, res: Response) => {
  let db = req.db;
  try {
    const result: any = await reqModel.getNapkin(db);

    res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

  } catch (err) {
    res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/showReqWaitDetailNapkin', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result = await reqModel.showReqWaitDetailNapkin(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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

router.post('/getReqNapkin', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
    const result = await reqModel.getReqNapkin(db, requisitionCode);
    for (const item of result) {
      item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
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


router.post('/searchByDate', async (req: Request, res: Response) => {
  let db = req.db;
  const dateSearch1 = req.body.dateSearch1;
  const dateSearch2 = req.body.dateSearch2;
  try {
      const result: any = await reqModel.searchByDate(db, dateSearch1,dateSearch2);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (err) {
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/searchByDateGroupbyWard', async (req: Request, res: Response) => {
  let db = req.db;
  const dateSearch1 = req.body.dateSearch1;
  const dateSearch2 = req.body.dateSearch2;
  try {
      const result: any = await reqModel.searchByDateGroupbyWard(db, dateSearch1,dateSearch2);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (err) {
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/searchByDateAmount', async (req: Request, res: Response) => {
  let db = req.db;
  const requisitionCode = req.body.requisitionCode;
  try {
      const result: any = await reqModel.searchByDateAmount(db, requisitionCode);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (err) {
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});

router.post('/searchByWard', async (req: Request, res: Response) => {
  let db = req.db;
  const wardId = req.body.wardId;
  const dateSearch1 = req.body.dateSearch1;
  const dateSearch2 = req.body.dateSearch2;
  try {
      const result: any = await reqModel.searchByWard(db,wardId, dateSearch1,dateSearch2);
      res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
  } catch (err) {
      res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
  }
});
export default router;