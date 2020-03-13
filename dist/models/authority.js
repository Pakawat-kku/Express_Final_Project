"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorityModel {
    constructor() {
        this.dbName = 'Authority';
    }
    getAuthority(db) {
        return db(this.dbName);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('aId', data.aId);
    }
}
exports.AuthorityModel = AuthorityModel;
//# sourceMappingURL=authority.js.map