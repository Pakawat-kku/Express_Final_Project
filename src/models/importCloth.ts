import * as Knex from 'knex';

export class ImportClothModel {
  dbName = 'ImportCloth';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('ImportCode', data.ImportCode)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getWhere(db: Knex, importCode){
    return db(this.dbName)
    // .leftJoin('ImportDetailWeight' , 'ImportDetailWeight.Import_importCode' , 'ImportCloth.ImportCode')
    .leftJoin('ImportDetailWeightSum' , 'ImportDetailWeightSum.ImportCloth_importCode' , 'ImportCloth.ImportCode')
    .where('ImportCode', importCode);
  }

  getBy(db: Knex, importCode){
    return db(this.dbName)
    .leftJoin('ImportDetailWeight' , 'ImportDetailWeight.Import_importCode' , 'ImportCloth.ImportCode')
    .where('ImportCode', importCode);
  }

}