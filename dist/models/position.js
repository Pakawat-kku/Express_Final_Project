"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PositionModel {
    constructor() {
        this.dbName = 'Position';
    }
    get(db) {
        return db(this.dbName);
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('positionId', data.positionId);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
}
exports.PositionModel = PositionModel;
//# sourceMappingURL=position.js.map