"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithdrawDetailModel {
    constructor() {
        this.dbName = 'WithdrawDetail';
    }
    insertWithdrawDetail(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getById(db, Withdraw_withdrawId, round) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawId)
            .where('round', round);
    }
    getByCloth(db, Withdraw_withdrawId, Cloth_clothId, round) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawId)
            .where('Cloth_clothId', Cloth_clothId)
            .where('round', round);
    }
    getWithdrawByUserId(db, userId) {
        return db(this.dbName)
            .innerJoin('Withdraw', 'Withdraw.withdrawCode', 'WithdrawDetail.Withdraw_withdrawCode')
            .innerJoin('Users', 'Users.userId', 'WithdrawDetail.Users_userId')
            .where('Users_userId', userId)
            .groupBy('withdrawCode');
    }
    getRound(db, Withdraw_withdrawId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawId);
    }
    getByCode(db, Withdraw_withdrawCode) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawCode);
    }
    getRoundByCode(db, Withdraw_withdrawCode, round) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawCode)
            .where('round', round);
    }
    getRoundByCodeUser(db, Withdraw_withdrawCode) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'WithdrawDetail.Cloth_clothId')
            .where('Withdraw_withdrawCode', Withdraw_withdrawCode);
    }
    searchByWard(db, wardId, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'WithdrawDetail.Ward_wardId')
            .innerJoin('WithdrawDetail', 'WithdrawDetail.Withdraw_withdrawCode', 'Withdraw.withdrawCode')
            .where('Withdraw.status', '1')
            .where('Ward_wardId', wardId)
            .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
            .orderBy('waithdrawDate', 'asc');
    }
}
exports.WithdrawDetailModel = WithdrawDetailModel;
//# sourceMappingURL=withdrawDetail.js.map