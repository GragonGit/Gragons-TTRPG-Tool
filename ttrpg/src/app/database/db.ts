import Dexie, { Table } from 'dexie';
import { environment } from 'src/environments/environment';
import { Character } from "../models/Character";
import { Stat } from '../models/Stat';
import { Characters } from "../resources/constants/Characters";
import { profileStats } from '../resources/constants/Stats';
import { allIndexedCharacterColumns } from "../resources/databaseColumns/characterColumn";

export class AppDB extends Dexie {
	public characters!: Table<Character, number>
	public profileStats!: Table<Stat, number>

	constructor() {
		super('ngdexieliveQuery')
		this.version(3).stores({
			characters: allIndexedCharacterColumns,
			profileStats: '++id',
		});
		this.on('populate', () => this.populate())
	}

	/**
	 * Fills the database with characters when in development
	 */
	private async populate() {
		if (!environment.production) {
			await db.characters.bulkAdd(Characters)
			await db.profileStats.bulkAdd(profileStats)
		}
	}
}

export const db = new AppDB()
