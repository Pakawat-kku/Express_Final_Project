import * as Knex from 'knex';

export class RepairModel {
  dbName = 'Repairs';

  get(db: Knex) {
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'Repairs.Cloth_clothId');
  }

  sumByClothId(db:Knex, clothId){
    return db(this.dbName)
    .sum('repairAmount as amount')
    .where('Cloth_clothId', clothId)
  }

  getByClothId(db:Knex, clothId){
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'Repairs.Cloth_clothId')
    .where('Cloth_clothId', clothId)
    .orderBy('id','desc');
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  searchByDate(db: Knex, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'Repairs.Cloth_clothId')
      .whereBetween('repairDate', [dateSearch1, dateSearch2])
      .orderBy('Cloth_clothId', 'asc')
      // .groupBy('Requisition.Ward_wardId');
  }
}