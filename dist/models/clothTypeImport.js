"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClothTypeImportModel {
    constructor() {
        this.dbName = 'ClothTypeImport';
    }
    get(db) {
        return db(this.dbName);
    }
}
exports.ClothTypeImportModel = ClothTypeImportModel;
//# sourceMappingURL=clothTypeImport.js.map