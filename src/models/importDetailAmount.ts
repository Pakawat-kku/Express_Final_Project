import * as Knex from 'knex';

export class ImportDetailAmountModel {
  dbName = 'ImportDetailAmount';

  get(db: Knex) {
    return db(this.dbName);
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

}