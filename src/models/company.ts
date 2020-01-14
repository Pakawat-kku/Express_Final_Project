import * as Knex from 'knex';

export class CompanyModel {
  dbName = 'Company';

  getCompany(db: Knex) {
    return db(this.dbName);
  }

}