"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExportClothModel {
    constructor() {
        this.dbName = 'ExportCloth';
    }
    getExportClothHos(db) {
        return db(this.dbName)
            .where('exportClothType', '1')
            .orderBy('idExportCloth', 'desc');
    }
    getExportClothCompany(db) {
        return db(this.dbName)
            .innerJoin('Company', 'Company.idCompany', 'ExportCloth.Company_idCompany')
            .orderBy('idExportCloth', 'desc');
    }
    getExportDetail(db) {
        return db(this.dbName);
    }
    insertExportCloth(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    insertExportDetail(db, data) {
        return db('ExportDetail')
            .insert(data);
    }
    showExportClothHospital(db, exportClothCode) {
        return db(this.dbName)
            .where('ExportCloth.exportClothCode', exportClothCode);
    }
    showExportClothCompany(db, exportClothCode) {
        return db(this.dbName)
            .join('Company', 'Company.idCompany', 'ExportCloth.Company_idCompany')
            .where('ExportCloth.exportClothCode', exportClothCode);
    }
    showExportDetail(db, exportClothCode) {
        return db('ExportDetail')
            .where('ExportCloth_exportClothCode', exportClothCode);
    }
}
exports.ExportClothModel = ExportClothModel;
//# sourceMappingURL=exportCloth.js.map