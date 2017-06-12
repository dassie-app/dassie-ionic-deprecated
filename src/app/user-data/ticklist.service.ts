import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class TicklistService {
  constructor(private sqlite: SQLite) { }

  addToTicklist(routeId: number): void {
    this.sqlite.create({
      name: 'boven.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('insert into table sends (routeId) values (?)', [routeId]);
    });
  }

  removeFromTicklist(routeId: number): void {
    this.sqlite.create({
      name: 'boven.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('delete from table sends where routeID = (?)', [routeId]);
    });
  }

  isInTicklist(routeId: number) {
    this.sqlite.create({
      name: 'boven.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select count routeId from table sends where routeID = (?)', [routeId]).then((response) => {
        if (response.rows.item(0).count > 0) {
          return true;
        } else {
          return false;
        }
      })
    })
  }
}