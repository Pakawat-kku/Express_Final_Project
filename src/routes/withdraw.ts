import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WithdrawModel } from '../models/withdraw';

const jwt = new Jwt();

const router: Router = Router();

const withdrawModel = new WithdrawModel();

router.post('/', async (req: Request, res: Response) => {
    let db = req.db;
    const data = req.body.data;

    try {
        const result: any = await withdrawModel.insertWithdraw(db, data);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.get('/', async (req: Request, res: Response) => {
    let db = req.db;

    try {
        const result: any = await withdrawModel.getWithdraw(db);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.get('/off', async (req: Request, res: Response) => {
    let db = req.db;

    try {
        const result: any = await withdrawModel.overviewOffline(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/changeActiveOff', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode

    try {
        const result: any = await withdrawModel.changeActiveOff(db, withdrawCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getByCode', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode

    try {
        const result: any = await withdrawModel.getWithdrawByCode(db, withdrawCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/checkMonth', async (req: Request, res: Response) => {
    let db = req.db;
    const date1 = req.body.date1;
    const date2 = req.body.date2;

    try {
        const result: any = await withdrawModel.checkPerMonth(db, date1, date2);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/statusWithdraw', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result: any = await withdrawModel.statusWithdraw(db, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/updateRound', async (req: Request, res: Response) => {
    let db = req.db;
    const round = req.body.round;
    const withdrawId = req.body.withdrawId;
    try {
        const result: any = await withdrawModel.updateRound(db, round, withdrawId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getWithdrawByUserId', async (req: Request, res: Response) => {
    let db = req.db;
    const userId = req.body.userId;
    try {
        const result: any = await withdrawModel.getWithdrawByUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/searchByDate', async (req: Request, res: Response) => {
    let db = req.db;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result: any = await withdrawModel.searchByDate(db, dateSearch1,dateSearch2);
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
        const result: any = await withdrawModel.searchByWard(db,wardId, dateSearch1,dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getByReq', async (req: Request, res: Response) => {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode

    try {
        const result: any = await withdrawModel.getWithdrawByReq(db, requisitionCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/updateRoundCode', async (req: Request, res: Response) => {
    let db = req.db;
    const round = req.body.round;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result: any = await withdrawModel.updateRoundCode(db, round, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getByCodeNapkin', async (req: Request, res: Response) => {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode

    try {
        const result: any = await withdrawModel.getWithdrawByCodeNapkin(db, withdrawCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

export default router;