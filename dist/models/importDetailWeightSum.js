"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportDetailWeightSumModel {
    constructor() {
        this.dbName = 'ImportDetailWeightSum';
    }
    get(db) {
        return db(this.dbName);
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('ImportCloth_importCode', data.ImportCloth_importCode);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    showImportDetailWeightSum(db, importCode) {
        return db(this.dbName)
            .where('ImportCloth_importCode', importCode);
    }
}
exports.ImportDetailWeightSumModel = ImportDetailWeightSumModel;
//# sourceMappingURL=importDetailWeightSum.js.map