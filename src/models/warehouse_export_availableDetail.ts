import * as Knex from 'knex';
import { join } from 'path';

export class Warehouse_export_availableDetailModel {
  dbName = 'Warehouse_export_availableDetail';

  getWarehouse_export_availableDetail(db: Knex) {
    return db(this.dbName)
  }

  getWarehouse_export_availableDetailByCode(db: Knex, warehouse_export_availableCode) {
    return db(this.dbName) 
    .join('Cloth' , 'Cloth.clothId' ,'Warehouse_export_availableDetail.Cloth_clothId' )
    .where('warehouse_export_availableCode', warehouse_export_availableCode);
  }

  insertWarehouse_export_availableDetail(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  updateWarehouse_export_availableDetail(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('warehouse_export_availableCode', data.warehouse_export_availableCode)
  }

  searchWarehouse_export_availableDetail(db: Knex, warehouse_export_availableCode) {
    return db(this.dbName)
    .where('warehouse_export_availableCode',"like","%"+warehouse_export_availableCode+"%");
  }

  deleteWarehouse_export_availableDetail(db: Knex, data) {
  return db(this.dbName) 
  .del()
  .where('warehouse_export_availableCode', data.warehouse_export_availableCode);
}

 
}