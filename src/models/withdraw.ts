import * as Knex from 'knex';

export class WithdrawModel {
  dbName = 'Withdraw';

  insertWithdraw(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getWithdraw(db: Knex) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId');
  }

  checkPerMonth(db: Knex, date1, date2) {
    return (
      db(this.dbName)
        .leftJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
        .select('withdraw.withdrawCode')
        .whereBetween('withdraw.withdrawDate', ['"' + date1 + '"', '"' + date2 + '"'])
    );
  }

  overviewOffline(db: Knex) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      // .innerJoin('WithdrawDetail', 'WithdrawDetail.Withdraw_withdrawId', 'Withdraw.withdrawId')
      // .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'WithdrawDetail.Cloth_clothId')
      .where('active_status', 'off')
      .groupBy('withdrawCode')
  }

  changeActiveOff(db: Knex, withdrawCode) {
    return db(this.dbName)
      .update('active_status', 'off')
      .where('withdrawCode', withdrawCode);
  }

  getWithdrawByCode(db: Knex, withdrawCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      // .innerJoin('Requisition', 'Requisition.requisitionCode', 'Withdraw.Requisition_requisitionCode')
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
  }

  searchByDateDetail(db: Knex, wardId) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      // .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
      .innerJoin('WithdrawDetail', 'WithdrawDetail.Withdraw_withdrawCode', 'Withdraw.withdrawCode')
      .where('Withdraw.Ward_wardId', wardId)
    // .andWhere('WithdrawDetail.round','Withdraw.totalRound')
  }

  searchByWard(db: Knex, wardId, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('Ward_wardId', wardId)
      .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
      .orderBy('withdrawDate', 'asc');
  }

  searchByCode(db: Knex, withdrawCode, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('withdrawCode', withdrawCode)
      .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
      .orderBy('withdrawDate', 'asc');
  }

  //new WITHDRAW!!!

  getWithdrawByReq(db: Knex, requisitionCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('Requisition_requisitionCode', requisitionCode);
  }

  updateRoundCode(db: Knex, round, withdrawCode) {
    return db(this.dbName)
      .update('totalRound', round)
      .where('withdrawCode', withdrawCode);
  }

  getWithdrawByCodeNapkin(db: Knex, withdrawCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      // .innerJoin('Requisition', 'nk'+'Requisition.requisitionCode', 'Withdraw.Requisition_requisitionCode')
      .where('withdrawCode', withdrawCode);
  }

  searchByWardDetail(db: Knex, wardId, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .innerJoin('WithdrawDetail', 'Withdraw.withdrawCode', 'WithdrawDetail.Withdraw_withdrawCode')
      .innerJoin('Cloth','Cloth.clothId','WithdrawDetail.Cloth_clothId')
      // .where('Withdraw.status', '1')
      .where('Ward_wardId', wardId)
      .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
      // .orderBy('withdrawDate', 'asc');
  }

}