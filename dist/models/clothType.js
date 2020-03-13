"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClothTypeModel {
    constructor() {
        this.dbName = 'ClothType';
    }
    get(db) {
        return db(this.dbName);
    }
    search(db, clothTypeId) {
        return db(this.dbName)
            .where('clothTypeId', clothTypeId);
    }
}
exports.ClothTypeModel = ClothTypeModel;
//# sourceMappingURL=clothType.js.map