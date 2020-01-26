import * as Knex from 'knex';

export class ImportDetailWeightModel {
  dbName = 'ImportDetailWeight';

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

  showImportDetailWeight(db: Knex, importCode){
    return db(this.dbName)
    .where('Export_exportClothCode', importCode);
  }

}