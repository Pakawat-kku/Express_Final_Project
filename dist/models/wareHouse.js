"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WareHouseModel {
    constructor() {
        this.dbName = 'Warehouse';
    }
    getWarehouse(db, clothId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Warehouse.Cloth_clothId')
            .where('Warehouse.Cloth_clothId', clothId);
    }
    getAllWarehouse(db) {
        return db(this.dbName);
    }
    updateWarehouse(db, data, clothId) {
        return db(this.dbName)
            .update(data)
            .where('Cloth_clothId', clothId);
    }
    insertWarehouse(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getSearchWarehouse(db, search) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Warehouse.Cloth_clothId', 'Cloth.clothId')
            .where('Cloth.clothName', "like", "%" + search + "%");
    }
}
exports.WareHouseModel = WareHouseModel;
//# sourceMappingURL=wareHouse.js.map