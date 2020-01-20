import * as Knex from 'knex';

export class WardModel {
  dbName = 'Ward';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('wardId', data.wardId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

}