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
const withdrawDetail_1 = require("../models/withdrawDetail");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const withdrawDetailModel = new withdrawDetail_1.WithdrawDetailModel();
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield withdrawDetailModel.insertWithdrawDetail(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/byId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;
    const round = req.body.round;
    try {
        const result = yield withdrawDetailModel.getById(db, Withdraw_withdrawId, round);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/byCloth', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;
    const Cloth_clothId = req.body.Cloth_clothId;
    const round = req.body.round;
    try {
        const result = yield withdrawDetailModel.getByCloth(db, Withdraw_withdrawId, Cloth_clothId, round);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getround', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawId = req.body.Withdraw_withdrawId;
    try {
        const result = yield withdrawDetailModel.getRound(db, Withdraw_withdrawId);
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
        const result = yield withdrawDetailModel.getWithdrawByUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/byCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawCode = req.body.Withdraw_withdrawCode;
    try {
        const result = yield withdrawDetailModel.getByCode(db, Withdraw_withdrawCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/roundByCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawCode = req.body.Withdraw_withdrawCode;
    const round = req.body.round;
    try {
        const result = yield withdrawDetailModel.getRoundByCode(db, Withdraw_withdrawCode, round);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/getRoundByCodeUser', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const Withdraw_withdrawCode = req.body.Withdraw_withdrawCode;
    try {
        const result = yield withdrawDetailModel.getRoundByCodeUser(db, Withdraw_withdrawCode);
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
        const result = yield withdrawDetailModel.searchByWard(db, wardId, dateSearch1, dateSearch2);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
exports.default = router;
//# sourceMappingURL=withdrawDetail.js.map