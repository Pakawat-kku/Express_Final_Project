"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PurchaseModel {
    constructor() {
        this.dbName = 'Purchase';
    }
    get(db) {
        return db(this.dbName);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getWhere(db, totalPrice, purchaseDate) {
        return db(this.dbName)
            .where('totalPrice', totalPrice)
            .andWhere('purchaseDate', purchaseDate);
    }
    getById(db, purchaseId) {
        return db(this.dbName)
            .where('purchaseId', purchaseId);
    }
}
exports.PurchaseModel = PurchaseModel;
//# sourceMappingURL=purchase.js.map