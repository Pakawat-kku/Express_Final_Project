"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PurchaseDetailModel {
    constructor() {
        this.dbName = 'PurchaseDetail';
    }
    get(db) {
        return db(this.dbName);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getById(db, purchaseId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'PurchaseDetail.Cloth_clothId', 'Cloth.clothId')
            .where('Purchase_purchaseId', purchaseId);
    }
}
exports.PurchaseDetailModel = PurchaseDetailModel;
//# sourceMappingURL=purchaseDetail.js.map