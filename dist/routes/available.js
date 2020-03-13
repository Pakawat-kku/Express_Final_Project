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
const available_1 = require("../models/available");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const availableModel = new available_1.AvailableModel();
router.post('/insertAvailable', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield availableModel.insertAvailable(db, data);
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
router.post('/updateAvailable', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    let clothId = req.body.clothId;
    try {
        const result = yield availableModel.updateAvailable(db, data, clothId);
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
    let clothId = req.body.clothId;
    try {
        const result = yield availableModel.getAvailable(db, clothId);
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
router.post('/searchAvailable', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let search = req.body.search;
    try {
        const result = yield availableModel.getSearchAvailable(db, search);
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
//# sourceMappingURL=available.js.map