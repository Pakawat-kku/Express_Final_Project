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
const users_1 = require("../models/users");
const moment = require("moment");
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
const usersModel = new users_1.UsersModel();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        moment.locale('th');
        const result = yield usersModel.get(db);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
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
router.get('/searchNotApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield usersModel.searchNotApprove(db);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
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
router.get('/searchApprove', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    try {
        const result = yield usersModel.searchApprove(db);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
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
router.post('/getUserId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const userId = req.body.userId;
    try {
        const result = yield usersModel.getUserId(db, userId);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const data = req.body.data;
    try {
        const result = yield usersModel.insertUsers(db, data);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/approveUser', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const username = req.body.username;
    const dateApprove = req.body.dateApprove;
    try {
        const result = yield usersModel.approveUser(db, username, dateApprove);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/cancelUser', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const username = req.body.username;
    try {
        const result = yield usersModel.cancelUser(db, username);
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByFirstname', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const search = req.body.search;
    try {
        const result = yield usersModel.searchUserByFirstname(db, search);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByLastname', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const search = req.body.search;
    try {
        const result = yield usersModel.searchUserByLastname(db, search);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
router.post('/searchByUsername', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let db = req.db;
    const search = req.body.search;
    try {
        const result = yield usersModel.searchUserByUsername(db, search);
        for (const item of result) {
            item.dateSignup = moment(item.dateSignup).add(543, 'years').format("DD MMMM YYYY");
            item.dateApprove = moment(item.dateApprove).add(543, 'years').format("DD MMMM YYYY");
        }
        res.send({ ok: true, statusCode: HttpStatus.OK, rows: result });
    }
    catch (err) {
        res.send({ ok: false, statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: err.message });
    }
}));
exports.default = router;
//# sourceMappingURL=users.js.map