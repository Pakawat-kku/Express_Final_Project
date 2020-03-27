"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users_AuthorityModel {
    constructor() {
        this.dbName = 'Users_Authority';
    }
    get(db) {
        return db(this.dbName);
    }
    getById(db, Users_userId) {
        return db(this.dbName)
            .innerJoin('Authority', 'Authority.aId', 'Users_Authority.Authority_aId')
            .where('Users_userId', Users_userId);
    }
    getByAuth(db, Authority_aId) {
        return db(this.dbName)
            .innerJoin('Users', 'Users.userId', 'Users_Authority.Users_userId')
            .where('Authority_aId', Authority_aId);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('id', data.id);
    }
    cancel(db, Users_userId) {
        return db(this.dbName)
            .delete()
            .where('Users_userId', Users_userId);
    }
    cancelById(db, Users_userId, Authority_aId) {
        return db(this.dbName)
            .delete()
            .where('Users_userId', Users_userId)
            .andWhere('Authority_aId', Authority_aId);
    }
}
exports.Users_AuthorityModel = Users_AuthorityModel;
//# sourceMappingURL=user_authority.js.map