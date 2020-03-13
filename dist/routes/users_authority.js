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
const user_authority_1 = require("../models/user_authority");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const users_authorityModel = new user_authority_1.Users_AuthorityModel();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield users_authorityModel.get(db);
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
    let Users_userId = req.body.Users_userId;
    try {
        const result = yield users_authorityModel.getById(db, Users_userId);
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
        const result = yield users_authorityModel.insert(db, data);
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
router.post('/update', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let data = req.body.data;
    try {
        const result = yield users_authorityModel.update(db, data);
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
router.post('/cancel', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let Users_userId = req.body.Users_userId;
    try {
        const result = yield users_authorityModel.cancel(db, Users_userId);
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
router.post('/cancelById', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    let Users_userId = req.body.Users_userId;
    let Authority_aId = req.body.Authority_aId;
    try {
        const result = yield users_authorityModel.cancelById(db, Users_userId, Authority_aId);
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
//# sourceMappingURL=users_authority.js.map