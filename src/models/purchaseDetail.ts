import * as Knex from 'knex';

export class PurchaseDetailModel {
    dbName = 'PurchaseDetail';

    get(db: Knex) {
        return db(this.dbName);
    }

    insert(db: Knex, data) {
        return db(this.dbName)
            .insert(data);
    }

    getById(db: Knex, purchaseId) {
        return db(this.dbName)
            .innerJoin('Cloth','PurchaseDetail.Cloth_clothId', 'Cloth.clothId')
            .where('Purchase_purchaseId', purchaseId)
    }

}