import * as Knex from 'knex';

export class WareHouseModel {
  dbName = 'Warehouse';

  getWareHouse(db: Knex, clothId) {
    return db(this.dbName)
    .innerJoin('Cloth','Cloth.clothId' , 'Warehouse.Cloth_clothId')
    .where('Warehouse.Cloth_clothId', clothId);
  }

  getAllWareHouse(db: Knex) {
    return db(this.dbName)
  }

  updateWareHouse(db: Knex, data , clothId) {
    return db(this.dbName)
      .update(data)
      .where('Cloth_clothId', clothId)
  }

  insertWareHouse(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getSearchWareHouse(db: Knex, search) {
    return db(this.dbName)
    .innerJoin('Cloth', 'Warehouse.Cloth_clothId', 'Cloth.clothId')
    .where('Cloth.clothName',"like","%"+search+"%");
  }

}