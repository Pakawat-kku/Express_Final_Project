"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    login(db, username, password) {
        return db('Users')
            .leftJoin('Ward', 'Ward.wardId', 'Users.Ward_wardId')
            .leftJoin('Position', 'Position.positionId', 'Users.Position_pId')
            .where('Users.username', username)
            .where('Users.password', password)
            .limit(1);
    }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map