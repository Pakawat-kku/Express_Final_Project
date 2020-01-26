import * as Knex from 'knex';

export class WithdrawModel {
  dbName = 'Withdraw';

  insertWithdraw(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getWithdrawByCode(db: Knex, withdrawCode) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .innerJoin('Requisition', 'Requisition.requisitionCode', 'Withdraw.Requisition_requisitionCode')
      .where('withdrawCode', withdrawCode);
  }

  statusWithdraw(db: Knex, withdrawId) {
    return db(this.dbName)
      .update('withdraw_status', '1')
      .where('withdrawId', withdrawId);
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
      .whereBetween('Withdraw.withdrawDate', [dateSearch1,dateSearch2])
      .orderBy('withdrawDate','asc');
      // .groupBy('Ward_wardId');
  }

  searchByWard(db: Knex,wardId, dateSearch1, dateSearch2) {
    return db(this.dbName)
      .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
      .where('Ward_wardId', wardId)
      .whereBetween('Withdraw.withdrawDate', [dateSearch1,dateSearch2])
      .orderBy('withdrawDate','asc');
  }

}