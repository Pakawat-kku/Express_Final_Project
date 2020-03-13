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
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const pdf = require("html-pdf");
const rimraf = require("rimraf");
const moment = require("moment");
const ward_1 = require("../models/ward");
const express_1 = require("express");
const wardModel = new ward_1.WardModel;
const router = express_1.Router();
router.get('/wardPDF', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const exportPath = path.join(__dirname, '../../output');
    fse.ensureDirSync(exportPath);
    const fileName = `${moment().format('x')}.pdf`;
    const pdfPath = path.join(exportPath, fileName);
    const _ejsPath = path.join(__dirname, './../../views/wardPdf.ejs');
    let contents = fs.readFileSync(_ejsPath, 'utf8');
    let db = req.db;
    const info = yield wardModel.get(db);
    let html = ejs.render(contents, { rows: info });
    let options = { format: 'A4' };
    pdf.create(html, options).toFile(pdfPath, function (err, data) {
        if (err) {
            console.log(err);
            res.send({ ok: false, error: err });
        }
        else {
            fs.readFile(pdfPath, function (err, data) {
                if (err) {
                    res.send({ ok: false, error: err });
                }
                else {
                    rimraf.sync(pdfPath);
                    res.contentType("application/pdf");
                    res.send(data);
                }
            });
        }
    });
}));
exports.default = router;
//# sourceMappingURL=pdf.js.map