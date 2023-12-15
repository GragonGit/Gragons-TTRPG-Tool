import Dexie, { Table } from 'dexie';
import { environment } from 'src/environments/environment';

export class AppDB extends Dexie {

  constructor() {
    super('ngdexieliveQuery')
    this.version(3).stores({
    });
    this.on('populate', () => this.populate())
  }

  /**
   * Fills the database with characters when in development
   */
  private async populate() {
    if (!environment.production) {
    }
  }
}

export const db = new AppDB()
