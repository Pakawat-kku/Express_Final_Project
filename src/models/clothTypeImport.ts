import * as Knex from 'knex';

export class ClothTypeImportModel {
  dbName = 'ClothTypeImport';

  get(db: Knex) {
    return db(this.dbName);
  }

}