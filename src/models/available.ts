import * as Knex from 'knex';

export class AvailableModel {
  dbName = 'Available';

  getAvailable(db: Knex, clothId) {
    return db(this.dbName)
    .innerJoin('Cloth','Cloth.clothId' , 'Available.Cloth_clothId')
    .where('Available.Cloth_clothId', clothId);
  }

  updateAvailable(db: Knex, data , clothId) {
    return db(this.dbName)
      .update(data)
      .where('Cloth_clothId', clothId)
  }

  insertAvailable(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getSearchAvailable(db: Knex, search) {
    return db(this.dbName)
    .innerJoin('Cloth', 'Available.Cloth_clothId', 'Cloth.clothId')
    .where('Cloth.clothName',"like","%"+search+"%");
  }

}