import * as Knex from 'knex';

export class WardModel {
  dbName = 'Ward';

  get(db: Knex) {
    return db(this.dbName);
  }


  getWard(db: Knex) {
    return db(this.dbName);
  }

  updateWard(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('wardId', data.wardId)
  }

  insertWard(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  searchWard(db: Knex, searchWard) {
    return db(this.dbName) 
    .where('wardName',"like","%"+searchWard+"%");
  }

deleteWard(db: Knex, data) {
  return db(this.dbName) 
  .del()
  .where('wardId', data.wardId);
}

printPdfWard(db: Knex) {
  return db(this.dbName) 
  }


}