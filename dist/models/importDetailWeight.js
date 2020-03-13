"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportDetailWeightModel {
    constructor() {
        this.dbName = 'ImportDetailWeight';
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
    showImportDetailWeight(db, importCode) {
        return db(this.dbName)
            .where('Export_exportClothCode', importCode);
    }
}
exports.ImportDetailWeightModel = ImportDetailWeightModel;
//# sourceMappingURL=importDetailWeight.js.map