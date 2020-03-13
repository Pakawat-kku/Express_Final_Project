"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DamageModel {
    constructor() {
        this.dbName = 'Damage';
    }
    get(db) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Damage.Cloth_clothId');
    }
    sumByClothId(db, clothId) {
        return db(this.dbName)
            .sum('damageAmount as amount')
            .where('Cloth_clothId', clothId);
    }
    getByClothId(db, clothId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Damage.Cloth_clothId')
            .where('Cloth_clothId', clothId)
            .orderBy('damageId', 'desc');
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
}
exports.DamageModel = DamageModel;
//# sourceMappingURL=damage.js.map