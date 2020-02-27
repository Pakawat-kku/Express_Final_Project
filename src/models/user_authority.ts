import * as Knex from 'knex';

export class Users_AuthorityModel {
  dbName = 'Users_Authority';

  get(db: Knex) {
    return db(this.dbName);
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('id', data.id);
  }

  cancel(db: Knex, Users_userId) {
    return db(this.dbName)
    .delete()
    .where('Users_userId', Users_userId);
  }

}