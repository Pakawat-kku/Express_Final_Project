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
    // .andWhere('Requisition.status', '1')
    .orderBy('Requisition.reqDate', 'desc');

  }

  showReqWaitDetail(db: Knex, requisitionCode) {
    return db('RequisitionDetail')
  //  .innerJoin ( 'RequisitionDetail' ,'RequisitionDetail.Requisition_requisitionCode' ,'Requisition.requisitionCode')
   .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
    // .where('Requisition.Ward_wardId', wardId)
    .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);
    // .orderBy('Requisition.reqDate', 'desc');

  }
  
  showReqWaitDetailOnly(db: Knex, requisitionCode) {
    return db('Requisition')
   .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
   .where('requisitionCode', requisitionCode);
  }

  showReqWaitAdmin(db: Knex) {
    return db('Requisition')
   .innerJoin ( 'Ward' ,'Ward.wardId' ,'Requisition.Ward_wardId')
  //  .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('status', '1')
   .orderBy('reqDate', 'desc');

  }

  showReqWaitDetailAdmin(db: Knex , requisitionCode : number) {
    return db('RequisitionDetail')
    .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
    .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);

  }

  approveReq(db:Knex, requisitionCode) {
    return db('Requisition')
    .update('status', '2')
    .where('requisitionCode' , requisitionCode);
  }


  insertReq(db:Knex, data) {
    return db('RequisitionDetail')
    .insert(data);
  }

  insertRealReq(db:Knex, data) {
    return db('Requisition')
    .insert(data);
  }


}