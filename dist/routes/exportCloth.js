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
const exportCloth_1 = require("../models/exportCloth");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const exportClothModel = new exportCloth_1.ExportClothModel();
router.get('/getExportClothHos', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield exportClothModel.getExportClothHos(db);
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
router.get('/getExportClothCompany', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield exportClothModel.getExportClothCompany(db);
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
router.get('/exportDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield exportClothModel.getExportDetail(db);
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
router.post('/insertExportCloth', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield exportClothModel.insertExportCloth(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/insertExportDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield exportClothModel.insertExportDetail(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/showExportClothCompany', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let exportClothCode = req.body.exportClothCode;
    try {
        const result = yield exportClothModel.showExportClothCompany(db, exportClothCode);
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
router.post('/showExportClothHospital', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let exportClothCode = req.body.exportClothCode;
    try {
        const result = yield exportClothModel.showExportClothHospital(db, exportClothCode);
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
router.post('/showExportDetail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let exportClothCode = req.body.exportClothCode;
    try {
        const result = yield exportClothModel.showExportDetail(db, exportClothCode);
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
//# sourceMappingURL=exportCloth.js.map