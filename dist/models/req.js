"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReqModel {
    constructor() {
        this.dbName = 'Requisition';
    }
    getStock(db) {
        return db('Cloth');
    }
    showReq(db, userId) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId');
    }
    showReqWait(db, wardId) {
        return db('Requisition')
            .where('Requisition.Ward_wardId', wardId)
            .andWhere('Requisition.status', '0')
            .orderBy('Requisition.reqDate', 'desc');
    }
    showReqWaitDetail(db, requisitionCode) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);
    }
    showReqWaitDetailOnly(db, requisitionCode) {
        return db('Requisition')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('requisitionCode', requisitionCode);
    }
    showReqWaitDetailDept(db, requisitionCode) {
        return db('Requisition')
            .where('requisitionCode', requisitionCode);
    }
    showReqWaitAdmin(db) {
        return db('Requisition')
            .where('status', '0')
            .orderBy('reqDate', 'desc');
    }
    showReqWaitAdminApprove(db) {
        return db('Requisition')
            .where('status', '1')
            .orderBy('reqDate', 'desc');
    }
    showReqWaitAdminNotApprove(db) {
        return db('Requisition')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('status', '2')
            .orderBy('reqDate', 'desc');
    }
    showReqWaitDetailAdmin(db, requisitionCode) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode);
    }
    approveReq(db, requisitionCode) {
        return db('Requisition')
            .update('status', '1')
            .where('requisitionCode', requisitionCode);
    }
    notApproveList(db, requisitionCode, clothId) {
        return db('RequisitionDetail')
            .update('requisitionDetailStatus', '2')
            .where('Cloth_clothId', clothId)
            .where('Requisition_requisitionCode', requisitionCode);
    }
    notApproveReq(db, requisitionCode) {
        return db('Requisition')
            .update('Status', '2')
            .where('requisitionCode', requisitionCode);
    }
    editReq(db, requisitionCode, clothId, amountCloth) {
        return db('RequisitionDetail')
            .update('amountCloth', amountCloth)
            .update('amountClothReal', amountCloth)
            .where('Cloth_clothId', clothId)
            .where('Requisition_requisitionCode', requisitionCode);
    }
    insertReq(db, data) {
        return db('RequisitionDetail')
            .insert(data);
    }
    insertRealReq(db, data) {
        return db('Requisition')
            .insert(data);
    }
    updateAmountReal(db, clothId, requisitionCode, amountClothReal) {
        return db('RequisitionDetail')
            .update('amountClothReal', amountClothReal)
            .where('Cloth_clothId', clothId)
            .andWhere('Requisition_requisitionCode', requisitionCode);
    }
    showReqApprove(db) {
        return db('Requisition')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('Requisition.status', '1')
            .andWhere('status_withdraw', '0');
    }
    showReqDetailApprove(db, requisitionCode) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .andWhere('Requisition_requisitionCode', requisitionCode);
    }
    statusWithdraw(db, requisitionCode) {
        return db('Requisition')
            .update('status_withdraw', '1')
            .where('requisitionCode', requisitionCode);
    }
    statusWithdrawSuccess(db, requisitionCode) {
        return db('Requisition')
            .update('status_withdraw', '2')
            .where('requisitionCode', requisitionCode);
    }
    updateStatusDetailWithdrawSuccess(db, id) {
        return db('RequisitionDetail')
            .update('statusDetail_withdraw', '2')
            .where('id', id);
    }
    searchWard(db, searchWard) {
        return db('Requisition')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('Ward.wardName', "like", "%" + searchWard + "%")
            .andWhere('Requisition.status', '1');
    }
    searchReqId(db, requisitionCode) {
        return db('Requisition')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('requisitionCode', "like", "%" + requisitionCode + "%");
    }
    searchTypeApprove(db, wardId) {
        return db('Requisition')
            .where('Requisition.status', '1')
            .andWhere('Requisition.Ward_wardId', wardId)
            .orderBy('reqDate', 'desc');
    }
    searchTypeNotApprove(db, wardId) {
        return db('Requisition')
            .where('Requisition.status', '2')
            .andWhere('Requisition.Ward_wardId', wardId)
            .orderBy('reqDate', 'desc');
    }
    getByWard(db, Ward_wardId) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('status', '1')
            .andWhere('status_withdraw', '0')
            .andWhere('Ward_wardId', Ward_wardId);
    }
    getByWardStatusWD1(db, Ward_wardId) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('status', '1')
            .andWhere('status_withdraw', '1')
            .andWhere('Ward_wardId', Ward_wardId);
    }
    getNapkin(db) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .innerJoin('Requisition', 'Requisition.requisitionCode', 'RequisitionDetail.Requisition_requisitionCode')
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('Requisition.status', '1')
            .andWhere('RequisitionDetail.statusDetail_withdraw', '1')
            .andWhere('Cloth.clothName', 'ผ้าเช็ดมือ');
    }
    showReqWaitDetailNapkin(db, requisitionCode) {
        return db('RequisitionDetail')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .where('RequisitionDetail.Requisition_requisitionCode', requisitionCode)
            .andWhere('Cloth.clothName', 'ผ้าเช็ดมือ');
    }
    getReqNapkin(db, requisitionCode) {
        return db(this.dbName)
            .where('Requisition.requisitionCode', requisitionCode);
    }
    searchByDate(db, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .innerJoin('RequisitionDetail', 'RequisitionDetail.Requisition_requisitionCode', 'Requisition.requisitionCode')
            .where('Requisition.status', '1')
            .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2])
            .orderBy('Ward.wardId', 'asc');
    }
    searchByDateGroupbyWard(db, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .where('Requisition.status', '1')
            .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2])
            .orderBy('Ward.wardId', 'asc')
            .groupBy('Requisition.Ward_wardId');
    }
    searchByDateAmount(db, requisitionCode) {
        return db('RequisitionDetail')
            .where('Requisition_requisitionCode', requisitionCode);
    }
    searchByWard(db, wardId, dateSearch1, dateSearch2) {
        return db(this.dbName)
            .innerJoin('Ward', 'Ward.wardId', 'Requisition.Ward_wardId')
            .innerJoin('RequisitionDetail', 'RequisitionDetail.Requisition_requisitionCode', 'Requisition.requisitionCode')
            .innerJoin('Cloth', 'Cloth.clothId', 'RequisitionDetail.Cloth_clothId')
            .where('Requisition.status', '1')
            .where('Ward_wardId', wardId)
            .whereBetween('Requisition.reqDate', [dateSearch1, dateSearch2]);
    }
}
exports.ReqModel = ReqModel;
//# sourceMappingURL=req.js.map