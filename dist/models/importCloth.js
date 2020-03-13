"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImportClothModel {
    constructor() {
        this.dbName = 'ImportCloth';
    }
    get(db) {
        return db(this.dbName);
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('ImportCode', data.ImportCode);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getWhere(db, importCode) {
        return db(this.dbName)
            .leftJoin('ImportDetailWeightSum', 'ImportDetailWeightSum.ImportCloth_importCode', 'ImportCloth.ImportCode')
            .where('ImportCode', importCode);
    }
    getBy(db, importCode) {
        return db(this.dbName)
            .leftJoin('ImportDetailWeight', 'ImportDetailWeight.Import_importCode', 'ImportCloth.ImportCode')
            .where('ImportCode', importCode);
    }
    getInner(db, Export_exportClothCode) {
        return db(this.dbName)
            .leftJoin('ImportDetailWeight', 'ImportDetailWeight.Import_importCode', 'ImportCloth.ImportCode')
            .where('Export_exportClothCode', Export_exportClothCode);
    }
    showImportCloth(db, exportClothCode) {
        return db(this.dbName)
            .where('Export_exportClothCode', exportClothCode);
    }
}
exports.ImportClothModel = ImportClothModel;
//# sourceMappingURL=importCloth.js.map