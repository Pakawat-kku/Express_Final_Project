"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyModel {
    constructor() {
        this.dbName = 'Company';
    }
    getCompany(db) {
        return db(this.dbName);
    }
    insertCompany(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    updateCompany(db, data) {
        return db(this.dbName)
            .update(data)
            .where('idCompany', data.idCompany);
    }
}
exports.CompanyModel = CompanyModel;
//# sourceMappingURL=company.js.map