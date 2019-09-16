import * as Knex from 'knex';

export class ReqModel {
  dbName = 'employee';

  getReq(db: Knex) {
    return db(this.dbName);
  }

}