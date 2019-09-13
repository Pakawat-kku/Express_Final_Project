import * as Knex from 'knex';

export class ReqModel {
  dbName = 'cloth';

  getReq(db: Knex) {
    return db(this.dbName);
  }

}