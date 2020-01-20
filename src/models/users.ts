import * as Knex from 'knex';

export class UsersModel {
  dbName = 'Users';

  get(db: Knex) {
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
    .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
    .orderBy('status_approve','DESC');
  }

  insertUsers(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  approveUser(db: Knex, username, dateApprove){
    return db(this.dbName)
    .update('status_approve','true')
    .update('dateApprove', dateApprove)
    .where('username', username);
  }

  cancelUser(db: Knex, username){
    return db(this.dbName)
    .update('status_approve','false')
    .where('username', username);
  }

  searchApprove(db: Knex){
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
    .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
    .where('status_approve','true');
  }

  searchNotApprove(db: Knex){
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
    .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
    .where('status_approve','false');
  }

  searchUserByFirstname(db: Knex, search) {
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
      .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
      .where('firstname', "like", "%" + search + "%");
  }

  searchUserByLastname(db: Knex, search) {
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
      .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
      .where('lastname', "like", "%" + search + "%");
  }

  searchUserByUsername(db: Knex, search) {
    return db(this.dbName)
    .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
      .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
      .where('username', "like", "%" + search + "%");
  }

}