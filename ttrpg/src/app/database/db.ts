import Dexie, { Table } from 'dexie';
import { environment } from 'src/environments/environment';
import { Character } from "../models/Character";
import { Characters } from "../resources/constants/Characters";
import { allIndexedCharacterColumns } from "../resources/databaseColumns/characterColumn";

export class AppDB extends Dexie {
	public characters!: Table<Character, number>

	constructor() {
		super('ngdexieliveQuery')
		this.version(3).stores({
			characters: allIndexedCharacterColumns,
		});
		this.on('populate', () => this.populate())
	}

	/**
	 * Fills the database with characters when in development
	 */
	private async populate() {
		if (!environment.production) {
			await db.characters.bulkAdd(Characters)
		}
	}
}

export const db = new AppDB()
