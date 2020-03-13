"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WardModel {
    constructor() {
        this.dbName = 'Ward';
    }
    get(db) {
        return db(this.dbName);
    }
    getWard(db) {
        return db(this.dbName);
    }
    getWardById(db, userId) {
        return db(this.dbName)
            .where('wardId', userId);
    }
    getWardBlank(db, userId) {
        return db(this.dbName)
            .where('Users_userId', userId)
            .orWhere('Users_userId', null);
    }
    updateWard(db, data) {
        return db(this.dbName)
            .update(data)
            .where('wardId', data.wardId);
    }
    insertWard(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    searchWard(db, searchWard) {
        return db(this.dbName)
            .where('wardName', "like", "%" + searchWard + "%");
    }
    deleteWard(db, data) {
        return db(this.dbName)
            .del()
            .where('wardId', data.wardId);
    }
    printPdfWard(db) {
        return db(this.dbName);
    }
    getPorter(db, Users_userId) {
        return db(this.dbName)
            .where('Users_userId', Users_userId);
    }
}
exports.WardModel = WardModel;
//# sourceMappingURL=ward.js.map