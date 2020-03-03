import * as Knex from 'knex';
import { join } from 'path';

export class Warehouse_export_availableModel {
  dbName = 'Warehouse_export_available';

  getWarehouse_export_available(db: Knex) {
    return db(this.dbName)
    .join('Users' , 'Users.userId' , 'Warehouse_export_available.warehouse_export_available_userExport')
    .orderBy('idWarehouse_export_available','desc');
  }

  getWarehouse_export_availableByCode(db: Knex, warehouse_export_availableCode) {
    return db(this.dbName) 
    .join('Users','Users.userId','Warehouse_export_available.warehouse_export_available_userExport')
    .where('warehouse_export_availableCode',warehouse_export_availableCode);
  }

  insertWarehouse_export_available(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  updateWarehouse_export_available(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('warehouse_export_availableCode', data.warehouse_export_availableCode)
  }

  searchWarehouse_export_available(db: Knex, warehouse_export_availableCode) {
    return db(this.dbName) 
    .where('warehouse_export_availableCode',"like","%"+warehouse_export_availableCode+"%");
  }

  deleteWarehouse_export_available(db: Knex, data) {
  return db(this.dbName) 
  .del()
  .where('warehouse_export_availableCode', data.warehouse_export_availableCode);
}

 
}