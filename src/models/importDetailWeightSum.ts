import * as Knex from 'knex';

export class ImportDetailWeightSumModel {
  dbName = 'ImportDetailWeightSum';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('ImportCloth_importCode', data.ImportCloth_importCode)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  showImportDetailWeightSum(db: Knex , importCode) {
    return db(this.dbName)
    .where('ImportCloth_importCode', importCode);
  }

}