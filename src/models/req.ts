import * as Knex from 'knex';

export class ReqModel {
  dbName = 'employee';

  getStock(db: Knex) {
    return db('Cloth')
  } 

  //ต้องมองเห็นเฉพราะที่ตัวเองเลือกเมื่อกี้
  showReq(db: Knex, userId: number) {
    return db('RequisitionDetail')
    .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
    .innerJoin ( 'Requisition' , 'Requisition.reqId'  , 'RequisitionDetail.Requisition_reqId')
    // .select(
    //   'RequisitionDetail.Cloth_clothId',
    //   'Cloth.clothName',
    //   'RequisitionDetail.amountCloth'
    // )
    .where('Requisition.Users_userId', userId)
    .andWhere('Requisition.status', '1');
  }

  showReqWait(db: Knex, wardId: number) {
    return db('Requisition')
    .innerJoin ( 'Users' , 'Users.userId'  , 'Requisition.Users_userId')

    // .select(
    //   'RequisitionDetail.Cloth_clothId',
    //   'Cloth.clothName',
    //   'RequisitionDetail.amountCloth'
    // )
    .where('Requisition.Ward_wardId', wardId)
    .andWhere('Requisition.status', '2');
  }



  insertReq(db:Knex, data) {
    return db('RequisitionDetail')
    .insert(data);
  }

  insertRealReq(db:Knex, data) {
    return db('Requisition')
    .insert(data);
  }


  updateReq(db: Knex, data, clothId: number) {
    return db('RequisitionDetail')
    .update(data)
    .where('Cloth_clothId', clothId);
      
  }

  updateRealReq(db: Knex, data, reqId: number) {
    return db('Requisition')
    .update(data)      
    .where('reqId', reqId);
  }

  delReq(db: Knex, Cloth_clothId: number) {
    return db('RequisitionDetail')
      .del()
      .where('Cloth_clothId', Cloth_clothId);
     
  }

  delRealReq(db: Knex, reqId: string) {
    return db('Requisition')
      .del()
      .where('reqId', reqId);
     
  }

  delRealReqNull(db: Knex, userId: number) {
    return db('Requisition')
      .del()
      // .innerJoin ('RequisitionDetail', 'RequisitionDetail.Requisition_reqId' , 'Requisition.reqId')
      .where('status', '1')
      .andWhere('Users_userId', userId);
     
  }

  // delReqNullAmount(db: Knex, userId: number) {
  //   return db('RequisitionDetail')
  //     .del()
  //     .where('amountCloth', null)
  //     .andWhere('Users_userId', userId);
     
  // }

}