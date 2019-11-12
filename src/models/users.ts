import * as Knex from 'knex';

export class UsersModel {
  dbName = 'Users';

 
  insertUsers(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

}