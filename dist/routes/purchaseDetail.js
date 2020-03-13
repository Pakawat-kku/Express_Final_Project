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
const purchaseDetail_1 = require("../models/purchaseDetail");
const moment = require('moment');
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const purchaseDetailModel = new purchaseDetail_1.PurchaseDetailModel();
moment.locale('th');
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield purchaseDetailModel.get(db);
        for (const item of result) {
            item.purchaseDate = moment(item.purchaseDate).format('YYYY-MM-DD HH:mm:ss');
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
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield purchaseDetailModel.insert(db, data);
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
router.post('/getById', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let purchaseId = req.body.purchaseId;
    try {
        const result = yield purchaseDetailModel.getById(db, purchaseId);
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
exports.default = router;
//# sourceMappingURL=purchaseDetail.js.map