import * as Knex from 'knex';

export class Users_AuthorityModel {
  dbName = 'Users_Authority';

  get(db: Knex) {
    return db(this.dbName);
  }

  getById(db: Knex, Users_userId) {
    return db(this.dbName)
    .innerJoin ('Authority', 'Authority.aId', 'Users_Authority.Authority_aId')
    .where('Users_userId', Users_userId);
  }

  getByAuth(db: Knex, Authority_aId) {
    return db(this.dbName)
    .innerJoin ('Users', 'Users.userId', 'Users_Authority.Users_userId')
    .where('Authority_aId', Authority_aId);
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

  cancelById(db: Knex, Users_userId, Authority_aId) {
    return db(this.dbName)
    .delete()
    .where('Users_userId', Users_userId)
    .andWhere('Authority_aId',Authority_aId);
  }

}