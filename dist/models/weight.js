"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeightModel {
    constructor() {
        this.dbName = 'Weight';
    }
    getWeight(db) {
        return db(this.dbName);
    }
    getWeightByCode(db, importCode) {
        return db(this.dbName)
            .where('Import_importCode', importCode);
    }
    insertWeight(db, data) {
        return db(this.dbName)
            .insert(data);
    }
    updateWeight(db, data) {
        return db(this.dbName)
            .update(data)
            .where('Cloth_clothId', data);
    }
}
exports.WeightModel = WeightModel;
//# sourceMappingURL=weight.js.map