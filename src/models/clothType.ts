import * as Knex from 'knex';

export class ClothTypeModel {
  dbName = 'clothType';

  get(db: Knex) {
    return db(this.dbName);
  }

}