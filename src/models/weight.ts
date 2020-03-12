import * as Knex from 'knex';

export class WeightModel {
  dbName = 'Weight';

  getWeight(db: Knex) {
    return db(this.dbName)
  }

  getWeightByCode(db: Knex, importCode) {
    return db(this.dbName)
    .where('Import_importCode', importCode);
  }

  insertWeight(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  updateWeight(db: Knex, data ) {
    return db(this.dbName)
      .update(data)
      .where('Cloth_clothId', data)
  }

  // getSearchWeight(db: Knex, search) {
  //   return db(this.dbName)
  //   .innerJoin('Cloth', 'Weight.Cloth_clothId', 'Cloth.clothId')
  //   .where('Cloth.clothName',"like","%"+search+"%");
  // }

}