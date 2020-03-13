"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithdrawModel {
    constructor() {
        this.dbName = 'Withdraw';
    }
    insertWithdraw(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    overviewOffline(db) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .where('active_status', 'off')
            .groupBy('withdrawCode');
    }
    changeActiveOff(db, withdrawCode) {
        return db(this.dbName)
            .update('active_status', 'off')
            .where('withdrawCode', withdrawCode);
    }
    getWithdrawByCode(db, withdrawCode) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .innerJoin('Requisition', 'Requisition.requisitionCode', 'Withdraw.Requisition_requisitionCode')
            .where('withdrawCode', withdrawCode);
    }
    statusWithdraw(db, withdrawCode) {
        return db(this.dbName)
            .update('withdraw_status', '1')
            .where('withdrawCode', withdrawCode);
    }
    getWithdrawByUserId(db, userId) {
        return db(this.dbName)
            .where('Users_userId', userId)
            .groupBy('withdrawCode');
    }
    updateRound(db, round, withdrawId) {
        return db(this.dbName)
            .update('totalRound', round)
            .where('withdrawId', withdrawId);
    }
    searchByDate(db, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
            .orderBy('withdrawDate', 'asc');
    }
    searchByWard(db, wardId, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .where('Ward_wardId', wardId)
            .whereBetween('Withdraw.withdrawDate', [dateSearch1, dateSearch2])
            .orderBy('withdrawDate', 'asc');
    }
    getWithdrawByReq(db, requisitionCode) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .where('Requisition_requisitionCode', requisitionCode);
    }
    updateRoundCode(db, round, withdrawCode) {
        return db(this.dbName)
            .update('totalRound', round)
            .where('withdrawCode', withdrawCode);
    }
    getWithdrawByCodeNapkin(db, withdrawCode) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Withdraw.Ward_wardId')
            .where('withdrawCode', withdrawCode);
    }
}
exports.WithdrawModel = WithdrawModel;
//# sourceMappingURL=withdraw.js.map