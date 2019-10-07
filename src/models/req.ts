import * as Knex from 'knex';

export class ReqModel {
  dbName = 'employee';

  getStock(db: Knex) {
    return db(this.dbName);
  } 

  showReq(db: Knex) {
    return db('requisition')
    .innerJoin ( 'cloth' , 'requisition.cId'  , 'cloth.cId')
    .select(
      'cloth.cId',
      'cloth.cName',
      'requisition.reqAmountCloth',
      'requisition.status'
    )
    .where('requisition.status', '0')
    .groupBy('cloth.cId');

  }

  insertReq(db:Knex, data) {
    return db('requisition')
    .insert(data);
  }

  updateReq(db: Knex, data) {
    return db('requisition')
      .update(data)
      .where('cId',data.cId);
      
  }

  delReq(db: Knex, cId: number , status: string) {
    return db('requisition')
      .del()
      .where('cId', cId)
      .andWhere('status', status);
     
  }

}