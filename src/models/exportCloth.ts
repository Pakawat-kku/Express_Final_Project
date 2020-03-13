import * as Knex from 'knex';

export class ExportClothModel {
  dbName = 'ExportCloth';

  getExportClothHos(db: Knex) {
    return db(this.dbName)
    // .innerJoin ( 'Company' ,'Company.idCompany' ,'ExportCloth.Company_idCompany')
    .where('exportClothType', '1')
    .orderBy('idExportCloth', 'desc');
  }

  getExportClothCompany(db: Knex) {
    return db(this.dbName)
    .innerJoin ( 'Company' ,'Company.idCompany' ,'ExportCloth.Company_idCompany')
    .orderBy('idExportCloth', 'desc');
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
 
  showExportClothHospital(db: Knex, exportClothCode) {
    return db(this.dbName)
    .where('exportClothCode', exportClothCode);
  }

  showExportClothCompany(db: Knex, exportClothCode) {
    return db(this.dbName)
    // .innerJoin ( 'Requisition' ,'Requisition.requisitionCode' ,'RequisitionDetail.Requisition_requisitionCode')
    .join('Company' ,'Company.idCompany' ,'ExportCloth.Company_idCompany')
    .where('ExportCloth.exportClothCode', exportClothCode)
    
  }

  showExportDetail(db: Knex, exportClothCode) {
    return db('ExportDetail')
    .where('ExportCloth_exportClothCode',exportClothCode)
  }
}