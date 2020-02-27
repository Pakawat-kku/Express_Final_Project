import * as Knex from 'knex';

export class WareHouseModel {
  dbName = 'WareHouse';

  getWareHouse(db: Knex, clothId) {
    return db(this.dbName)
    .innerJoin('Cloth','Cloth.clothId' , 'WareHouse.Cloth_clothId')
    .where('WareHouse.Cloth_clothId', clothId);
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
    .innerJoin('Cloth', 'WareHouse.Cloth_clothId', 'Cloth.clothId')
    .where('Cloth.clothName',"like","%"+search+"%");
  }

}