"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warehouse_export_availableDetailModel {
    constructor() {
        this.dbName = 'Warehouse_export_availableDetail';
    }
    getWarehouse_export_availableDetail(db) {
        return db(this.dbName);
    }
    getWarehouse_export_availableDetailByCode(db, warehouse_export_availableCode) {
        return db(this.dbName)
            .join('Cloth', 'Cloth.clothId', 'Warehouse_export_availableDetail.Cloth_clothId')
            .where('warehouse_export_availableCode', warehouse_export_availableCode);
    }
    insertWarehouse_export_availableDetail(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    updateWarehouse_export_availableDetail(db, data) {
        return db(this.dbName)
            .update(data)
            .where('warehouse_export_availableCode', data.warehouse_export_availableCode);
    }
    searchWarehouse_export_availableDetail(db, warehouse_export_availableCode) {
        return db(this.dbName)
            .where('warehouse_export_availableCode', "like", "%" + warehouse_export_availableCode + "%");
    }
    deleteWarehouse_export_availableDetail(db, data) {
        return db(this.dbName)
            .del()
            .where('warehouse_export_availableCode', data.warehouse_export_availableCode);
    }
}
exports.Warehouse_export_availableDetailModel = Warehouse_export_availableDetailModel;
//# sourceMappingURL=warehouse_export_availableDetail.js.map