import * as Knex from 'knex';

export class CompanyModel {
  dbName = 'Company';

  getCompany(db: Knex) {
    return db(this.dbName);
  }

  insertCompany(db: Knex, data){
    return db(this.dbName)
    .insert(data)
  }
  updateCompany(db: Knex, data){
    return db(this.dbName)
    .update(data)
    .where('idCompany', data.idCompany);
  }

}