import * as Knex from 'knex';

export class AuthorityModel {
  dbName = 'Authority';

  getAuthority(db: Knex) {
    return db(this.dbName)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('aId', data.aId)
  }

}