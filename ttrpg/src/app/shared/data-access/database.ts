import Dexie, { Table } from 'dexie';
import { environment } from 'src/environments/environment';

export interface Character {
  id?: number
  fileName: string
  lastOpened?: Date
}

export class AppDB extends Dexie {
  characters!: Table<Character, number>

  constructor() {
    super('ngdexieliveQuery')
    this.version(3).stores({
      characters: '++id'
    });
    this.on('populate', () => this.populate())
  }

  /**
   * Fills the database with characters when in development
   */
  private async populate() {
    if (!environment.production) {
      await db.characters.bulkAdd([
        {
          fileName: 'Sylas'
        },
        {
          fileName: 'Evelynn',
          lastOpened: new Date()
        }
      ])
    }
  }
}

export const db = new AppDB()
