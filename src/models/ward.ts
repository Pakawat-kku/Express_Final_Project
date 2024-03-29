import * as Knex from 'knex';
import { join } from 'path';

export class WardModel {
  dbName = 'Ward';

  get(db: Knex) {
    return db(this.dbName);
  }

  getWard(db: Knex) {
    return db(this.dbName)
  }

  getWardById(db: Knex, userId) {
    return db(this.dbName)
      .where('wardId', userId);
  }

  getWardBlank(db: Knex, userId) {
    return db(this.dbName)
      // .where('Users_userId' , null)
      .where('Users_userId', userId)
      .orWhere('Users_userId', null)
  }


  updateWard(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('wardId', data.wardId)
  }

  insertWard(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  searchWard(db: Knex, searchWard) {
    return db(this.dbName)
      .where('wardName', "like", "%" + searchWard + "%");
  }

  deleteWard(db: Knex, data) {
    return db(this.dbName)
      .del()
      .where('wardId', data.wardId);
  }

  printPdfWard(db: Knex) {
    return db(this.dbName)
  }

  getPorter(db: Knex, Users_userId) {
    return db(this.dbName)
      .where('Users_userId', Users_userId)
  }

  getOverview(db: Knex, date1, date2) {
    return db(this.dbName)
    .select('Ward.wardId',
    'Ward.wardName',
    'RequisitionDetail.Cloth_clothId',
    'RequisitionDetail.amountClothReal',
    'Requisition.status',
    'Requisition.RequisitionCode',
    'Requisition.reqDate')
    .leftJoin('Requisition','Ward.wardId','Requisition.Ward_wardId')
    .leftJoin('RequisitionDetail','Requisition.RequisitionCode','RequisitionDetail.Requisition_requisitionCode')
    // .sum('RequisitionDetail.amountClothReal as sumReq')
    .where('Requisition.status','1')
    .groupBy('Ward.wardId')
    .whereBetween('Requisition.reqDate', ['"' + date1 + '"', '"' + date2 + '"'])
  }

}