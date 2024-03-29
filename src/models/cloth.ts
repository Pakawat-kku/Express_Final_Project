import * as Knex from 'knex';

export class ClothModel {
  dbName = 'Cloth';

  getStock(db: Knex) {
    return db(this.dbName)
    .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId')
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('clothId', data.clothId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getSearch(db: Knex, search) {
    return db(this.dbName)
    .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId')
    .where('Cloth.clothName',"like","%"+search+"%");
  }

  getClothById(db: Knex, clothId) {
    return db(this.dbName)
    // .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId')
    .where('clothId', clothId);
  }

}