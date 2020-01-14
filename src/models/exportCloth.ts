import * as Knex from 'knex';

export class ExportClothModel {
  dbName = 'ExportCloth';

  getExportCloth(db: Knex) {
    return db(this.dbName);
  }

  getExportDetail(db: Knex) {
    return db(this.dbName);
  }

  insertExportCloth(db: Knex, data) {
    return db(this.dbName)
    .insert(data)
  }

  insertExportDetail(db: Knex, data) {
    return db('ExportDetail')
      .insert(data)
  }
 
  showExportCloth(db: Knex, exportClothCode) {
    return db(this.dbName)
    // .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    // .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'RequisitionDetail.Cloth_clothId')
    .where('exportClothCode',exportClothCode)
  }

  showExportDetail(db: Knex, exportClothCode) {
    return db('ExportDetail')
    // .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    // .innerJoin ( 'Cloth' ,'Cloth.clothId' ,'RequisitionDetail.Cloth_clothId')
    .where('ExportCloth_exportClothCode',exportClothCode)
  }
}