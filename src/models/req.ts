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
    // .innerJoin ( 'Requisition' , 'Requisition.requisitionCode'  , 'RequisitionDetail.Requisition_requisitionCode')
    // .select(
    //   'RequisitionDetail.Cloth_clothId',
    //   'Cloth.clothName',
    //   'RequisitionDetail.amountCloth'
    // )
    // .where('Requisition.Users_userId', userId)
    // .andWhere('Requisition.status', '1');
  }

  showReqWait(db: Knex, wardId: number) {
    return db('Requisition')
    // .innerJoin ( 'RequisitionDetail' ,'RequisitionDetail.Requisition_requisitionCode' ,'Requisition.requisitionCode')
    .where('Requisition.Ward_wardId', wardId)
    .andWhere('Requisition.status', '1')
    .orderBy('Requisition.reqDate', 'desc');
  }

  showReqWaitDetail(db: Knex, wardId: number, requisitionCode) {
    return db('Requisition')
   .innerJoin ( 'RequisitionDetail' ,'RequisitionDetail.Requisition_requisitionCode' ,'Requisition.requisitionCode')
    .where('Requisition.Ward_wardId', wardId)
    .where('Requisition.requisitionCode', requisitionCode)
    .andWhere('Requisition.status', '1');

  }


  insertReq(db:Knex, data) {
    return db('RequisitionDetail')
    .insert(data);
  }

  insertRealReq(db:Knex, data) {
    return db('Requisition')
    .insert(data);
  }

  showReqApprove(db: Knex) {
    return db('Requisition')
    .innerJoin ('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
    .where('Requisition.status', '2')
  }

  showReqDetailApprove(db: Knex, requisitionCode) {
    return db('RequisitionDetail')
    .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    .andWhere('Requisition_requisitionCode',requisitionCode)
  }

}