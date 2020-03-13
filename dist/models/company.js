"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyModel {
    constructor() {
        this.dbName = 'Company';
    }
    getCompany(db) {
        return db(this.dbName);
    }
}
exports.CompanyModel = CompanyModel;
//# sourceMappingURL=company.js.map