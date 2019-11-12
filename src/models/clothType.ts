import * as Knex from 'knex';

export class ClothTypeModel {
  dbName = 'ClothType';

  get(db: Knex) {
    return db(this.dbName);
  }

  search(db: Knex, clothTypeId) {
    return db(this.dbName)
    .where('clothTypeId', clothTypeId);
  }

}