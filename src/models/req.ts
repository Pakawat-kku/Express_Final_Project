import * as Knex from 'knex';

export class ReqModel {
  dbName = 'Requisition';

  getStock(db: Knex) {
    return db('Cloth')
  } 

  //ต้องมองเห็นเฉพาะที่ตัวเองเลือกเมื่อกี้
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
    .andWhere('Requisition.status', '0')
    .orderBy('Requisition.reqDate', 'desc');
  }

  showReqWaitDetail(db: Knex, requisitionCode) {
    return db('RequisitionDetail')
   .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);

  }
  
  showReqWaitDetailOnly(db: Knex, requisitionCode) {
    return db('Requisition')
   .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
   .where('requisitionCode', requisitionCode);
  }

  showReqWaitDetailDept(db: Knex, requisitionCode) {
    return db('Requisition')
   .where('requisitionCode', requisitionCode);
  }

  showReqWaitAdmin(db: Knex) {
    return db('Requisition')
  //  .innerJoin ( 'Ward' ,'Ward.wardId' ,'Requisition.Ward_wardId')
  //  .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('status', '0')
   .orderBy('reqDate', 'desc');

  }

  showReqWaitAdminApprove(db: Knex) {
    return db('Requisition')
  //  .innerJoin ( 'Ward' ,'Ward.wardId' ,'Requisition.Ward_wardId')
  //  .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('status', '1')
   .orderBy('reqDate', 'desc');

  }

  showReqWaitAdminNotApprove(db: Knex) {
    return db('Requisition')
   .innerJoin ( 'Ward' ,'Ward.wardId' ,'Requisition.Ward_wardId')
  //  .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('status', '2')
   .orderBy('reqDate', 'desc');

  }

  showReqWaitDetailAdmin(db: Knex , requisitionCode : number) {
    return db('RequisitionDetail')
    .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
    .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);

  }

  approveReq(db:Knex, requisitionCode) {
    return db('Requisition')
    .update('status', '1')
    .where('requisitionCode' , requisitionCode);
  }

  notApproveList(db:Knex, requisitionCode , clothId) {
    return db('RequisitionDetail')
    .update('requisitionDetailStatus', '2')
    .where('Cloth_clothId' , clothId)
    .where('Requisition_requisitionCode' , requisitionCode);
  }

  notApproveReq(db:Knex, requisitionCode) {
    return db('Requisition')
    .update('Status', '2')
    .where('requisitionCode' , requisitionCode);
  }

  editReq(db:Knex, requisitionCode , clothId, amountCloth) {
    return db('RequisitionDetail')
    .update('amountCloth', amountCloth)
    .update('amountClothReal', amountCloth)
    .where('Cloth_clothId' , clothId)
    .where('Requisition_requisitionCode' , requisitionCode);
  }

  insertReq(db:Knex, data) {
    return db('RequisitionDetail')
    .insert(data);
  }

  insertRealReq(db:Knex, data) {
    return db('Requisition')
    .insert(data);
  }

  updateAmountReal(db:Knex, clothId , requisitionCode , amountClothReal) {
    return db('RequisitionDetail')
    .update('amountClothReal' ,amountClothReal)
    .where('Cloth_clothId', clothId)
    .andWhere('Requisition_requisitionCode', requisitionCode);

  }

  showReqApprove(db: Knex) {
    return db('Requisition')
    .innerJoin ('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
    .where('Requisition.status', '1')
    .andWhere('status_withdraw','0');
  }

  showReqDetailApprove(db: Knex, requisitionCode) {
    return db('RequisitionDetail')
    // .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'RequisitionDetail.Cloth_clothId')
    .andWhere('Requisition_requisitionCode',requisitionCode)
  }

  statusWithdraw(db:Knex, requisitionCode) {
    return db('Requisition')
    .update('status_withdraw', '1')
    .where('requisitionCode' , requisitionCode);
  }

  statusWithdrawSuccess(db:Knex, requisitionCode) {
    return db('Requisition')
    .update('status_withdraw', '2')
    .where('requisitionCode' , requisitionCode);
  }

 updateStatusDetailWithdrawSuccess(db:Knex, id) {
    return db('RequisitionDetail')
    .update('statusDetail_withdraw', '2')
    .where('id' , id);
  }
  
  searchWard(db: Knex, searchWard) {
    return db('Requisition') 
    .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
    .where('Ward.wardName',"like","%"+searchWard+"%")
    .andWhere('Requisition.status', '1');
  }

  searchReqId(db: Knex, requisitionCode) {
    return db('Requisition') 
    .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
    .where('requisitionCode',"like","%"+requisitionCode+"%")
    
  }

  searchTypeApprove(db: Knex ,wardId) {
    return db('Requisition') 
    .where('Requisition.status', '1')
    .andWhere('Requisition.Ward_wardId', wardId)
    .orderBy('reqDate', 'desc');


  }

  searchTypeNotApprove(db: Knex ,wardId) {
    return db('Requisition') 
    .where('Requisition.status', '2')
    .andWhere('Requisition.Ward_wardId', wardId)
    .orderBy('reqDate', 'desc');


  }

  //overview-withdraw NEW!!!

  getByWard(db: Knex, Ward_wardId){
    return db(this.dbName)
    .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
    .where('status','1')
    .andWhere('status_withdraw','0')
    .andWhere('Ward_wardId',Ward_wardId);
  }

  getByWardStatusWD1(db: Knex, Ward_wardId){
    return db(this.dbName)
    .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
    .where('status','1')
    .andWhere('status_withdraw','1')
    .andWhere('Ward_wardId',Ward_wardId);
  }

  //get ผ้าเช็ดมือ
  getNapkin(db: Knex){
    return db('RequisitionDetail')
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'RequisitionDetail.Cloth_clothId')
    .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    .innerJoin ( 'Ward' , 'Ward.wardId'  , 'Requisition.Ward_wardId')
    .where('Requisition.status','1')
    // .andWhere('Requisition.status_withdraw','0')
    .andWhere('RequisitionDetail.statusDetail_withdraw','1')
    .andWhere('Cloth.clothName','ผ้าเช็ดมือ');
  }

  showReqWaitDetailNapkin(db: Knex, requisitionCode) {
    return db('RequisitionDetail')
   .innerJoin ( 'Cloth' , 'Cloth.clothId'  , 'RequisitionDetail.Cloth_clothId')
   .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode)
   .andWhere('Cloth.clothName', 'ผ้าเช็ดมือ');
  }

  getReqNapkin(db: Knex, requisitionCode){
    return db(this.dbName)
    .where('Requisition.requisitionCode',requisitionCode)
  }

  searchByDate(db: Knex, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
      .innerJoin('RequisitionDetail', 'RequisitionDetail.Requisition_requisitionCode', 'Requisition.requisitionCode')
      .where('Requisition.status', '1')
      .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2])
      .orderBy('Ward.wardId', 'asc')
      // .groupBy('Requisition.Ward_wardId');
  }

  searchByDateGroupbyWard(db: Knex, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
      .where('Requisition.status', '1')
      .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2])
      .orderBy('Ward.wardId', 'asc')
      .groupBy('Requisition.Ward_wardId');
  }

  searchByDateAmount(db: Knex, requisitionCode	) {
    return db('RequisitionDetail')
      // .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
      .where('Requisition_requisitionCode', requisitionCode)
      // .orderBy('Ward.wardId', 'asc')
      // .groupBy('Requisition.Ward_wardId');
  }

  searchByWard(db: Knex, wardId, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
      .innerJoin('RequisitionDetail', 'RequisitionDetail.Requisition_requisitionCode', 'Requisition.requisitionCode')
      .innerJoin('Cloth','Cloth.clothId','RequisitionDetail.Cloth_clothId')
      .where('Requisition.status', '1')
      .where('Ward_wardId', wardId)
      // .sum('RequisitionDetail.amountClothReal')
      .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2])
      // .orderBy('reqDate', 'asc');
  }

}