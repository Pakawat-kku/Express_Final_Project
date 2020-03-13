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
const jwt = new jwt_1.Jwt();
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send({ ok: true, message: 'Welcome to RESTful api server!', code: HttpStatus.OK });
});
router.get('/gen-token', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let payload = {
            name: 'lms@cs kku',
            id: 1
        };
        let token = jwt.signApiKey(payload);
        res.send({ ok: true, token: token, code: HttpStatus.OK });
    }
    catch (error) {
        res.send({ ok: false, error: error.message, code: HttpStatus.INTERNAL_SERVER_ERROR });
    }
}));
exports.default = router;
//# sourceMappingURL=index.js.map