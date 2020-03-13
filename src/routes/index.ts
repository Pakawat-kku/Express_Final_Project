import * as express from 'express';
import { Router, Request, Response } from 'express';
import { Jwt } from '../models/jwt';

import * as HttpStatus from 'http-status-codes';

const jwt = new Jwt();

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ 
    apiName: 'lms@cs kku',
    version: '1.0.0',
    subVersion: '2020.03.12-01'
  });
});

router.get('/gen-token', async (req: Request, res: Response) => {

  try {
    let payload = {
      name: 'lms@cs kku',
      id: 1
    }

    let token = jwt.signApiKey(payload);
    res.send({ ok: true, token: token, code: HttpStatus.OK });
  } catch (error) {
    res.send({ ok: false, error: error.message, code: HttpStatus.INTERNAL_SERVER_ERROR });
  }

});

export default router;