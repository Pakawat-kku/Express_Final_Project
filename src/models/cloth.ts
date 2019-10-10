import * as Knex from 'knex';

export class ClothModel {
  dbName = 'Cloth';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
    .update(data)
    .where('clothId', data.clothId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

}