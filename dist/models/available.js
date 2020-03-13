"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AvailableModel {
    constructor() {
        this.dbName = 'Available';
    }
    getAvailable(db, clothId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Available.Cloth_clothId')
            .where('Available.Cloth_clothId', clothId);
    }
    updateAvailable(db, data, clothId) {
        return db(this.dbName)
            .update(data)
            .where('Cloth_clothId', clothId);
    }
    insertAvailable(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    getSearchAvailable(db, search) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Available.Cloth_clothId', 'Cloth.clothId')
            .where('Cloth.clothName', "like", "%" + search + "%");
    }
}
exports.AvailableModel = AvailableModel;
//# sourceMappingURL=available.js.map