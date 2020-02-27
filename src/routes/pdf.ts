/// <reference path="../../typings.d.ts" />

import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import * as fse from 'fs-extra';
import * as pdf from 'html-pdf';
import * as rimraf from 'rimraf';
import * as moment from 'moment';
import { WardModel } from '../models/ward';
import { Router, Request, Response } from 'express';
import { Jwt } from "../models/jwt";

const wardModel = new WardModel;
const router: Router = Router();

router.get('/wardPDF', async (req: Request, res: Response) => {
    const exportPath = path.join(__dirname, '../../output');
    fse.ensureDirSync(exportPath);

    const fileName = `${moment().format('x')}.pdf`;
    const pdfPath = path.join(exportPath, fileName);

    const _ejsPath = path.join(__dirname, './../../views/wardPdf.ejs');
    let contents = fs.readFileSync(_ejsPath, 'utf8');

    //get data
    let db = req.db;
    const info = await wardModel.get(db);

    // create HTML file
    let html = ejs.render(contents, { rows: info });

    // Pdf size
    let options = { format: 'A4' };

    // Create pdf file
    pdf.create(html, options).toFile(pdfPath, function (err, data) {
        if (err) {
            console.log(err);
            res.send({ ok: false, error: err });
        } else {
            fs.readFile(pdfPath, function (err, data) {
                if (err) {
                    res.send({ ok: false, error: err });
                } else {
                    rimraf.sync(pdfPath);

                    res.contentType("application/pdf");
                    res.send(data);
                }
            });
        }
    });

});
export default router;