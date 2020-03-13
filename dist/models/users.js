"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersModel {
    constructor() {
        this.dbName = 'Users';
    }
    get(db) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .orderBy('status_approve', 'DESC');
    }
    getUserId(db, userId) {
        return db(this.dbName)
            .where('userId', userId);
    }
    insertUsers(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    approveUser(db, username, dateApprove) {
        return db(this.dbName)
            .update('status_approve', 'true')
            .update('dateApprove', dateApprove)
            .where('username', username);
    }
    cancelUser(db, username) {
        return db(this.dbName)
            .update('status_approve', 'false')
            .where('username', username);
    }
    searchApprove(db) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('status_approve', 'true');
    }
    searchNotApprove(db) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('status_approve', 'false');
    }
    searchUserByFirstname(db, search) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('firstname', "like", "%" + search + "%");
    }
    searchUserByLastname(db, search) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('lastname', "like", "%" + search + "%");
    }
    searchUserByUsername(db, search) {
        return db(this.dbName)
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('username', "like", "%" + search + "%");
    }
}
exports.UsersModel = UsersModel;
//# sourceMappingURL=users.js.map