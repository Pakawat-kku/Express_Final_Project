import * as Knex from 'knex';

export class ClothModel {
  dbName = 'Cloth';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
    .update(data)
    .where('cId', data.cId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

  getStock(db: Knex) {
     return db(this.dbName)
     .innerJoin ( 'ClothType' , 'Cloth.ClothType_clothTypeId'  , 'ClothType.clothTypeId')
     .orderBy('clothId', 'ascs');
    //  .select(
    //   'cloth.cName', 
    //   'cTypeId.cTypeName'
    //   );

  }

}