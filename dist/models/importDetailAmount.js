"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportDetailAmountModel {
    constructor() {
        this.dbName = 'ImportDetailAmount';
    }
    get(db) {
        return db(this.dbName);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
}
exports.ImportDetailAmountModel = ImportDetailAmountModel;
//# sourceMappingURL=importDetailAmount.js.map