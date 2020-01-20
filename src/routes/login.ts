/// <reference path="../../typings.d.ts" />

import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as crypto from 'crypto';

import { Login } from '../models/login';

import { Jwt } from '../models/jwt';

const loginModel = new Login();
const jwt = new Jwt();

const router: Router = Router();

router.post('/login', async (req: Request, res: Response) => {
  let username: string = req.body.username;
  let password: string = req.body.password;

  let db = req.db;

  try {
    let encPassword = crypto.createHash('md5').update(password).digest('hex');
    // let rs: any = await loginModel.login(db, username, encPassword);
    let rs: any = await loginModel.login(db, username, password);

    if (rs.length) {

      let payload = {
        // fullname: `${rs[0].firstName} ${rs[0].lastName}`,
        firstname: rs[0].firstname,
        lastname: rs[0].lastname,
        username: rs[0].username,
        Ward_wardId: rs[0].Ward_wardId,
        userId: rs[0].userId,
        position: rs[0].Position_pId,
        positionName: rs[0].positionName,
        wardName: rs[0].wardName,
        status_approve: rs[0].status_approve,
      }
      console.log('payload', payload);
      
      let token = jwt.sign(payload);
      console.log('token', token);
      res.send({ ok: true, token: token , code: HttpStatus.OK });

       
       
    } else {
      res.send({ ok: false, error: 'Login failed!', code: HttpStatus.UNAUTHORIZED });
    }
  } catch (error) {
    res.send({ ok: false, error: error.message, code: HttpStatus.INTERNAL_SERVER_ERROR });
  }

});

export default router;