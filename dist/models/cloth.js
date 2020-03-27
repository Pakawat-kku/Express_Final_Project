"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClothModel {
    constructor() {
        this.dbName = 'Cloth';
    }
    getStock(db) {
        return db(this.dbName)
            .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId');
    }
    update(db, data) {
        return db(this.dbName)
            .update(data)
            .where('clothId', data.clothId);
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getSearch(db, search) {
        return db(this.dbName)
            .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId')
            .where('Cloth.clothName', "like", "%" + search + "%");
    }
    getClothById(db, clothId) {
        return db(this.dbName)
            .where('clothId', clothId);
    }
}
exports.ClothModel = ClothModel;
//# sourceMappingURL=cloth.js.map