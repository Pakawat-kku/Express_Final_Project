/// <reference path="../typings.d.ts" />

require('dotenv').config();

import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as HttpStatus from 'http-status-codes';
import * as express from 'express';
import * as cors from 'cors';

import Knex = require('knex');
import { MySqlConnectionConfig } from 'knex';
import { Router, Request, Response, NextFunction } from 'express';
import { Jwt } from './models/jwt';

import indexRoute from './routes/index';
import importClothRoute from './routes/importCloth';
import importDetailWeightSumRoute from './routes/importDetailWeightSum';
import importDetailWeightRoute from './routes/importDetailWeight';
import importDetailAmountRoute from './routes/importDetailAmount';
import loginRoute from './routes/login';
import requestRoute from './routes/request';
import reqRoute from './routes/req';
import authorityRoute from './routes/authority';
import clothTypeRoute from './routes/clothType';
import clothTypeImportRoute from './routes/clothTypeImport';
import clothRoute from './routes/cloth';
import positionRoute from './routes/position';
import wardRoute from './routes/ward';
import users_authorityRoute from './routes/users_authority';
import repairRoute from './routes/repair';
import damageRoute from './routes/damage';
import withdrawRoute from './routes/withdraw';
import withdrawDetailRoute from './routes/withdrawDetail';
import purchaseRoute from './routes/purchase';
import purchaseDetailRoute from './routes/purchaseDetail';
import exportClothRoute from './routes/exportCloth';
import companyRoute from './routes/company';
import wareHouseRoute from './routes/wareHouse';
import availableRoute from './routes/available';
import pdfRoute from './routes/pdf';
import usersRoute from './routes/users';
import warehouse_export_availableRoute from './routes/warehouse_export_available';
import warehouse_export_availableDetailRoute from './routes/warehouse_export_availableDetail';
import weightRoute from './routes/weight';



// Assign router to the express.Router() instance
const app: express.Application = express();

const jwt = new Jwt();

//view engine setup
app.set('views', path.join(__dirname, '../views'));
app.engine('.ejs', ejs.renderFile);
app.set('view engine', 'ejs');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'../public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());

let connection: MySqlConnectionConfig = {
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
  debug: false
}

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

app.use((req: Request, res: Response, next: NextFunction) => {
  req.db = db;
  next();
});

let checkAuth = (req: Request, res: Response, next: NextFunction) => {
  let token: string = null;

  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  } else {
    token = req.body.token;
  }

  jwt.verify(token)
    .then((decoded: any) => {
      req.decoded = decoded;
      next();
    }, err => {
      return res.send({
        ok: false,
        error: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
        code: HttpStatus.UNAUTHORIZED
      });
    });
}

app.use('/login', loginRoute);
app.use('/api', checkAuth, requestRoute);
app.use('/req', reqRoute);
app.use('/importCloth', importClothRoute);
app.use('/clothType', clothTypeRoute);
app.use('/authority', authorityRoute);
app.use('/clothTypeImport', clothTypeImportRoute);
app.use('/importDetailWeightSum', importDetailWeightSumRoute);
app.use('/importDetailWeight', importDetailWeightRoute);
app.use('/importDetailAmount', importDetailAmountRoute);
app.use('/cloth', clothRoute);
app.use('/purchase', purchaseRoute);
app.use('/position', positionRoute);
app.use('/purchaseDetail', purchaseDetailRoute);
app.use('/users', usersRoute);
app.use('/users_authority', users_authorityRoute);
app.use('/ward', wardRoute);
app.use('/damage', damageRoute);
app.use('/repair', repairRoute);
app.use('/withdraw', withdrawRoute);
app.use('/withdrawDetail', withdrawDetailRoute);
app.use('/exportCloth', exportClothRoute);
app.use('/company', companyRoute);
app.use('/wareHouse', wareHouseRoute);
app.use('/available', availableRoute);
app.use('/warehouse_export_available', warehouse_export_availableRoute);
app.use('/warehouse_export_availableDetail', warehouse_export_availableDetailRoute);
app.use('/weight', weightRoute);


app.use('/pdf', pdfRoute);
app.use('/', indexRoute);

//error handlers

if (process.env.NODE_ENV === 'development') {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      ok: false,
      code: HttpStatus.NOT_FOUND,
      error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
});

export default app;
