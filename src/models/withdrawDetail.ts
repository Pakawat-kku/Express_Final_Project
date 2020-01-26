import * as Knex from 'knex';

export class WithdrawDetailModel {
  dbName = 'WithdrawDetail';

  insertWithdrawDetail(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

  getById(db: Knex, Withdraw_withdrawId, round){
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'WithdrawDetail.Cloth_clothId')
    .where('Withdraw_withdrawId',Withdraw_withdrawId)
    .where('round', round);
  }

  getByCloth(db: Knex, Withdraw_withdrawId, Cloth_clothId, round){
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'WithdrawDetail.Cloth_clothId')
    .where('Withdraw_withdrawId',Withdraw_withdrawId)
    .where('Cloth_clothId', Cloth_clothId)
    .where('round', round);
  }

  getWithdrawByUserId(db: Knex, userId) {
    return db(this.dbName)
      .innerJoin('Withdraw', 'Withdraw.withdrawId', 'WithdrawDetail.Withdraw_withdrawId')
      .where('Users_userId', userId)
      .groupBy('withdrawCode');
  }

  getRound(db: Knex, Withdraw_withdrawId, ){
    return db(this.dbName)
    .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'WithdrawDetail.Cloth_clothId')
    .where('Withdraw_withdrawId',Withdraw_withdrawId)
  }

}