import * as Knex from 'knex';

export class ReqModel {
  dbName = 'employee';

  getReq(db: Knex) {
    return db(this.dbName);
  }

  insertReq(db:Knex, data) {
    return db('requisition')
    .insert(data);
  }

}