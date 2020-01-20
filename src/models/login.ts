import * as Knex from 'knex';

export class Login {
  login(db: Knex, username: string, password: string) {
    return db('Users')
      .leftJoin('Ward' , 'Ward.wardId' , 'Users.Ward_wardId' )
      .leftJoin('Position' , 'Position.positionId' , 'Users.Position_pId' )
      .where('Users.username', username)
      .where('Users.password', password)
      .limit(1);
  }
}