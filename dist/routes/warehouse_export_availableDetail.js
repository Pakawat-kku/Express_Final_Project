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
const warehouse_export_availableDetail_1 = require("../models/warehouse_export_availableDetail");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const warehouse_export_availableDetailModel = new warehouse_export_availableDetail_1.Warehouse_export_availableDetailModel();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield warehouse_export_availableDetailModel.getWarehouse_export_availableDetail(db);
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
router.post('/getWarehouse_export_availableDetailByCode', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let warehouse_export_availableCode = req.body.warehouse_export_availableCode;
    try {
        const result = yield warehouse_export_availableDetailModel.getWarehouse_export_availableDetailByCode(db, warehouse_export_availableCode);
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
router.post('/insertWarehouse_export_availableDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield warehouse_export_availableDetailModel.insertWarehouse_export_availableDetail(db, data);
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
router.post('/updateWarehouse_export_availableDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield warehouse_export_availableDetailModel.updateWarehouse_export_availableDetail(db, data);
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
router.post('/searchWarehouse_export_availableDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const warehouse_export_availableCode = req.body.warehouse_export_availableCode;
    try {
        const result = yield warehouse_export_availableDetailModel.searchWarehouse_export_availableDetail(db, warehouse_export_availableCode);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/deleteWarehouse_export_availableDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield warehouse_export_availableDetailModel.deleteWarehouse_export_availableDetail(db, data);
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
//# sourceMappingURL=warehouse_export_availableDetail.js.map