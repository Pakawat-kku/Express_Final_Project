import * as Knex from 'knex';

export class PurchaseModel {
    dbName = 'Purchase';

    get(db: Knex) {
        return db(this.dbName);
    }

    insert(db: Knex, data) {
        return db(this.dbName)
            .insert(data);
    }

    getWhere(db: Knex, totalPrice, purchaseDate) {
        return db(this.dbName)
            .where('totalPrice', totalPrice)
            .andWhere('purchaseDate', purchaseDate);
    }

    getById(db: Knex, purchaseId){
        return db(this.dbName)
        .where('purchaseId', purchaseId);
    }

}