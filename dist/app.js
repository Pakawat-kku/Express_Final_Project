"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const HttpStatus = require("http-status-codes");
const express = require("express");
const cors = require("cors");
const Knex = require("knex");
const jwt_1 = require("./models/jwt");
const index_1 = require("./routes/index");
const importCloth_1 = require("./routes/importCloth");
const importDetailWeightSum_1 = require("./routes/importDetailWeightSum");
const importDetailWeight_1 = require("./routes/importDetailWeight");
const importDetailAmount_1 = require("./routes/importDetailAmount");
const login_1 = require("./routes/login");
const request_1 = require("./routes/request");
const req_1 = require("./routes/req");
const authority_1 = require("./routes/authority");
const clothType_1 = require("./routes/clothType");
const clothTypeImport_1 = require("./routes/clothTypeImport");
const cloth_1 = require("./routes/cloth");
const position_1 = require("./routes/position");
const ward_1 = require("./routes/ward");
const users_authority_1 = require("./routes/users_authority");
const repair_1 = require("./routes/repair");
const damage_1 = require("./routes/damage");
const withdraw_1 = require("./routes/withdraw");
const withdrawDetail_1 = require("./routes/withdrawDetail");
const purchase_1 = require("./routes/purchase");
const purchaseDetail_1 = require("./routes/purchaseDetail");
const exportCloth_1 = require("./routes/exportCloth");
const company_1 = require("./routes/company");
const wareHouse_1 = require("./routes/wareHouse");
const available_1 = require("./routes/available");
const pdf_1 = require("./routes/pdf");
const users_1 = require("./routes/users");
const warehouse_export_available_1 = require("./routes/warehouse_export_available");
const warehouse_export_availableDetail_1 = require("./routes/warehouse_export_availableDetail");
const weight_1 = require("./routes/weight");
const app = express();
const jwt = new jwt_1.Jwt();
app.set('views', path.join(__dirname, '../views'));
app.engine('.ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
let connection = {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
    debug: false
};
let db = Knex({
    client: 'mysql',
    connection: connection,
    pool: {
        min: 0,
        max: 100,
        afterCreate: (conn, done) => {
            conn.query('SET NAMES utf8', (err) => {
                done(err, conn);
            });
        }
    },
});
app.use((req, res, next) => {
    req.db = db;
    next();
});
let checkAuth = (req, res, next) => {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    else if (req.query && req.query.token) {
        token = req.query.token;
    }
    else {
        token = req.body.token;
    }
    jwt.verify(token)
        .then((decoded) => {
        req.decoded = decoded;
        next();
    }, err => {
        return res.send({
            ok: false,
            error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
            code: HttpStatus.UNAUTHORIZED
        });
    });
};
app.use('/login', login_1.default);
app.use('/api', checkAuth, request_1.default);
app.use('/req', req_1.default);
app.use('/importCloth', importCloth_1.default);
app.use('/clothType', clothType_1.default);
app.use('/authority', authority_1.default);
app.use('/clothTypeImport', clothTypeImport_1.default);
app.use('/importDetailWeightSum', importDetailWeightSum_1.default);
app.use('/importDetailWeight', importDetailWeight_1.default);
app.use('/importDetailAmount', importDetailAmount_1.default);
app.use('/cloth', cloth_1.default);
app.use('/purchase', purchase_1.default);
app.use('/position', position_1.default);
app.use('/purchaseDetail', purchaseDetail_1.default);
app.use('/users', users_1.default);
app.use('/users_authority', users_authority_1.default);
app.use('/ward', ward_1.default);
app.use('/damage', damage_1.default);
app.use('/repair', repair_1.default);
app.use('/withdraw', withdraw_1.default);
app.use('/withdrawDetail', withdrawDetail_1.default);
app.use('/exportCloth', exportCloth_1.default);
app.use('/company', company_1.default);
app.use('/wareHouse', wareHouse_1.default);
app.use('/available', available_1.default);
app.use('/warehouse_export_available', warehouse_export_available_1.default);
app.use('/warehouse_export_availableDetail', warehouse_export_availableDetail_1.default);
app.use('/weight', weight_1.default);
app.use('/pdf', pdf_1.default);
app.use('/', index_1.default);
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: {
                ok: false,
                code: HttpStatus.INTERNAL_SERVER_ERROR,
                error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
            }
        });
    });
}
app.use((req, res, next) => {
    res.status(HttpStatus.NOT_FOUND).json({
        error: {
            ok: false,
            code: HttpStatus.NOT_FOUND,
            error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
        }
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map