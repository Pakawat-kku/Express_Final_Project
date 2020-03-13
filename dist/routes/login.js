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
const HttpStatus = require("http-status-codes");
const crypto = require("crypto");
const login_1 = require("../models/login");
const jwt_1 = require("../models/jwt");
const loginModel = new login_1.Login();
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let username = req.body.username;
    let password = req.body.password;
    let db = req.db;
    try {
        let encPassword = crypto.createHash('md5').update(password).digest('hex');
        let rs = yield loginModel.login(db, username, password);
        if (rs.length) {
            let payload = {
                firstname: rs[0].firstname,
                lastname: rs[0].lastname,
                username: rs[0].username,
                Ward_wardId: rs[0].Ward_wardId,
                userId: rs[0].userId,
                position: rs[0].Position_pId,
                positionName: rs[0].positionName,
                wardName: rs[0].wardName,
                status_approve: rs[0].status_approve,
            };
            console.log('payload', payload);
            let token = jwt.sign(payload);
            console.log('token', token);
            res.send({ ok: true, token: token, code: HttpStatus.OK });
        }
        else {
            res.send({ ok: false, error: 'Login failed!', code: HttpStatus.UNAUTHORIZED });
        }
    }
    catch (error) {
        res.send({ ok: false, error: error.message, code: HttpStatus.INTERNAL_SERVER_ERROR });
    }
}));
exports.default = router;
//# sourceMappingURL=login.js.map