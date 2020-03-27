"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../models/jwt");
const req_1 = require("../models/req");
const HttpStatus = require("http-status-codes");
const moment = require("moment");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const reqModel = new req_1.ReqModel();
router.get('/stock', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.getStock(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const userId = req.query.userId;
    try {
        const result = yield reqModel.showReq(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/showReqWait', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    try {
        const result = yield reqModel.showReqWait(db, wardId);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/showReqWaitDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.showReqWaitDetail(db, requisitionCode);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReqWaitDetailOnly', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.query.requisitionCode;
    try {
        const result = yield reqModel.showReqWaitDetailOnly(db, requisitionCode);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReqWaitAdmin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.showReqWaitAdmin(db);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReqWaitAdminApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.showReqWaitAdminApprove(db);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReqWaitAdminNotApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.showReqWaitAdminNotApprove(db);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.get('/showReqWaitDetailAdmin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.query.requisitionCode;
    try {
        const result = yield reqModel.showReqWaitDetailAdmin(db, requisitionCode);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/approveReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.approveReq(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/notApproveList', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;
    try {
        const result = yield reqModel.notApproveList(db, requisitionCode, clothId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/notApproveReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;
    try {
        const result = yield reqModel.notApproveReq(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/editReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    const clothId = req.body.clothId;
    const amountCloth = req.body.amountCloth;
    try {
        const result = yield reqModel.editReq(db, requisitionCode, clothId, amountCloth);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/insertReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield reqModel.insertReq(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/insertRealReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    console.log('data', data);
    try {
        const result = yield reqModel.insertRealReq(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/updateAmountReal', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const clothId = req.body.clothId;
    const requisitionCode = req.body.requisitionCode;
    const amountClothReal = req.body.amountClothReal;
    try {
        const result = yield reqModel.updateAmountReal(db, clothId, requisitionCode, amountClothReal);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.get('/showReqApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.showReqApprove(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/showReqDetailApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.showReqDetailApprove(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/statusWithdraw', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.statusWithdraw(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const searchWard = req.body.searchWard;
    const result = yield reqModel.searchReqId(db, searchWard);
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.statusWithdraw(db, requisitionCode);
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchWard', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const searchWard = req.body.searchWard;
    try {
        const result = yield reqModel.searchWard(db, searchWard);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchReqId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.searchReqId(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchTypeApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    try {
        const result = yield reqModel.searchTypeApprove(db, wardId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchTypeNotApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    try {
        const result = yield reqModel.searchTypeNotApprove(db, wardId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/statusWithdrawSuccess', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.statusWithdrawSuccess(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/statusDetailWithdrawSuccess', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const id = req.body.id;
    try {
        const result = yield reqModel.updateStatusDetailWithdrawSuccess(db, id);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getByWard', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Ward_wardId = req.body.Ward_wardId;
    try {
        const result = yield reqModel.getByWard(db, Ward_wardId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getByWardStatusWD1', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Ward_wardId = req.body.Ward_wardId;
    try {
        const result = yield reqModel.getByWardStatusWD1(db, Ward_wardId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getNapkin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield reqModel.getNapkin(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/showReqWaitDetailNapkin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.showReqWaitDetailNapkin(db, requisitionCode);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/getReqNapkin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.getReqNapkin(db, requisitionCode);
        for (const item of result) {
            item.reqDate = moment(item.reqDate).format('YYYY-MM-DD HH:mm:ss');
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (error) {
        console.log(error.message);
        res.send({
            ok: false,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message
        });
    }
}));
router.post('/searchByDate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield reqModel.searchByDate(db, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByDateGroupbyWard', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield reqModel.searchByDateGroupbyWard(db, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByDateAmount', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield reqModel.searchByDateAmount(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByWard', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield reqModel.searchByWard(db, wardId, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
exports.default = router;
//# sourceMappingURL=req.js.map