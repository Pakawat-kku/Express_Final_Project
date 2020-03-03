import * as Knex from 'knex';

export class WithdrawModel {
  dbName = 'Withdraw';

  insertWithdraw(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  overviewOffline(db: Knex) {
    return db(this.dbName)
    .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      // .innerJoin('WithdrawDetail', 'WithdrawDetail.Withdraw_withdrawId', 'Withdraw.withdrawId')
      // .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'WithdrawDetail.Cloth_clothId')
      .where('active_status', 'off')
      .groupBy('withdrawCode')
  }

  changeActiveOff(db: Knex, withdrawCode){
    return db(this.dbName)
    .update('active_status', 'off')
    .where('withdrawCode', withdrawCode);
  }

  getWithdrawByCode(db: Knex, withdrawCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .innerJoin('Requisition', 'Requisition.requisitionCode', 'Withdraw.Requisition_requisitionCode')
      .where('withdrawCode', withdrawCode);
  }

  statusWithdraw(db: Knex, withdrawCode) {
    return db(this.dbName)
      .update('withdraw_status', '1')
      .where('withdrawCode', withdrawCode);
  }

  getWithdrawByUserId(db: Knex, userId) {
    return db(this.dbName)
      // .innerJoin('WithdrawDetail', 'WithdrawDetail.Withdraw_withdrawId', 'Withdraw.withdrawId')
      .where('Users_userId', userId)
      .groupBy('withdrawCode');
  }

  updateRound(db: Knex, round, withdrawId) {
    return db(this.dbName)
      .update('totalRound', round)
      .where('withdrawId', withdrawId);
  }

  searchByDate(db: Knex, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
      .orderBy('withdrawDate', 'asc');
    // .groupBy('Ward_wardId');
  }

  searchByWard(db: Knex, wardId, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('Ward_wardId', wardId)
      .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
      .orderBy('withdrawDate', 'asc');
  }

  //new WITHDRAW!!!

  getWithdrawByReq(db: Knex, requisitionCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('Requisition_requisitionCode', requisitionCode);
  }

}