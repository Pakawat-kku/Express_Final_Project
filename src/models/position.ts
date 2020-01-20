import * as Knex from 'knex';

export class PositionModel {
  dbName = 'Position';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('positionId', data.positionId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

}