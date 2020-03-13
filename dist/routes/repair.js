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
const repair_1 = require("../models/repair");
const express_1 = require("express");
const jwt_1 = require("../models/jwt");
const HttpStatus = require("http-status-codes");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const repairModel = new repair_1.RepairModel();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield repairModel.get(db);
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
        const result = yield repairModel.insert(db, data);
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
router.post('/sumByClothId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let clothId = req.body.clothId;
    try {
        const result = yield repairModel.sumByClothId(db, clothId);
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
router.post('/getByClothId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let clothId = req.body.clothId;
    try {
        const result = yield repairModel.getByClothId(db, clothId);
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
//# sourceMappingURL=repair.js.map