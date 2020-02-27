import * as Knex from 'knex';

export class DamageModel {
  dbName = 'Damage';

  get(db: Knex) {
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'Damage.Cloth_clothId');
  }

  sumByClothId(db:Knex, clothId){
    return db(this.dbName)
    .sum('damageAmount as amount')
    .where('Cloth_clothId', clothId)
  }

  getByClothId(db:Knex, clothId){
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'Damage.Cloth_clothId')
    .where('Cloth_clothId', clothId)
    .orderBy('damageId','desc');
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

}