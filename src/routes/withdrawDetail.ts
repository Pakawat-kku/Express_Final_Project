import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';
import * as HttpStatus from 'http-status-codes';
import { WithdrawDetailModel } from '../models/withdrawDetail';

const jwt = new Jwt();

const router: Router = Router();

const withdrawDetailModel = new WithdrawDetailModel();

router.post('/', async (req: Request, res: Response) => {
    let db = req.db;
    const data = req.body.data;

    try {
        const result: any = await withdrawDetailModel.insertWithdrawDetail(db, data);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/byId', async (req: Request, res: Response) => {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;
    const round = req.body.round;

    try {
        const result: any = await withdrawDetailModel.getById(db, Withdraw_withdrawId, round);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/byCloth', async (req: Request, res: Response) => {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;
    const Cloth_clothId = req.body.Cloth_clothId;
    const round = req.body.round;

    try {
        const result: any = await withdrawDetailModel.getByCloth(db, Withdraw_withdrawId,Cloth_clothId, round);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getround', async (req: Request, res: Response) => {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;

    try {
        const result: any = await withdrawDetailModel.getRound(db, Withdraw_withdrawId);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/getWithdrawByUserId', async (req: Request, res: Response) => {
    let db = req.db;
    const userId = req.body.userId;
    try {
        const result: any = await withdrawDetailModel.getWithdrawByUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/byCode', async (req: Request, res: Response) => {
    let db = req.db;
    const Withdraw_withdrawCode = req.body.Withdraw_withdrawCode;

    try {
        const result: any = await withdrawDetailModel.getByCode(db, Withdraw_withdrawCode);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

router.post('/roundByCode', async (req: Request, res: Response) => {
    let db = req.db;
    const Withdraw_withdrawCode = req.body.Withdraw_withdrawCode;
    const round = req.body.round;

    try {
        const result: any = await withdrawDetailModel.getRoundByCode(db, Withdraw_withdrawCode, round);

        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });

    } catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
});

export default router;