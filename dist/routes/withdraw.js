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
const HttpStatus = require("http-status-codes");
const withdraw_1 = require("../models/withdraw");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const withdrawModel = new withdraw_1.WithdrawModel();
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield withdrawModel.insertWithdraw(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield withdrawModel.getWithdraw(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.get('/off', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield withdrawModel.overviewOffline(db);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/changeActiveOff', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result = yield withdrawModel.changeActiveOff(db, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getByCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result = yield withdrawModel.getWithdrawByCode(db, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/checkMonth', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const date1 = req.body.date1;
    const date2 = req.body.date2;
    try {
        const result = yield withdrawModel.checkPerMonth(db, date1, date2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/statusWithdraw', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result = yield withdrawModel.statusWithdraw(db, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/updateRound', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const round = req.body.round;
    const withdrawId = req.body.withdrawId;
    try {
        const result = yield withdrawModel.updateRound(db, round, withdrawId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getWithdrawByUserId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const userId = req.body.userId;
    try {
        const result = yield withdrawModel.getWithdrawByUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByDate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield withdrawModel.searchByDate(db, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByDateDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    try {
        const result = yield withdrawModel.searchByDateDetail(db, wardId);
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
        const result = yield withdrawModel.searchByWard(db, wardId, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByWardDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const wardId = req.body.wardId;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield withdrawModel.searchByWardDetail(db, wardId, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    const dateSearch1 = req.body.dateSearch1;
    const dateSearch2 = req.body.dateSearch2;
    try {
        const result = yield withdrawModel.searchByCode(db, withdrawCode, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getByReq', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const requisitionCode = req.body.requisitionCode;
    try {
        const result = yield withdrawModel.getWithdrawByReq(db, requisitionCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/updateRoundCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const round = req.body.round;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result = yield withdrawModel.updateRoundCode(db, round, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getByCodeNapkin', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const withdrawCode = req.body.withdrawCode;
    try {
        const result = yield withdrawModel.getWithdrawByCodeNapkin(db, withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
exports.default = router;
//# sourceMappingURL=withdraw.js.map