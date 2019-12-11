import * as Knex from 'knex';

export class WithdrawDetailModel {
  dbName = 'WithdrawDetail';

  insertWithdrawDetail(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

}