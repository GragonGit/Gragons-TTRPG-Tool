import Dexie, { Table } from 'dexie';
import { Character } from "../models/Character";
import { Characters } from "../resources/Characters";
import { environment } from 'src/environments/environment.development';

export class AppDB extends Dexie {
	characters!: Table<Character, number>;

	constructor() {
		super('ngdexieliveQuery');
		this.version(3).stores({
			characters: '++id, name',
		});
		this.on('populate', () => this.populate());
	}

	async populate() {
		if (!environment.production) {
			await db.characters.bulkAdd(Characters);
		}
	}
}

export const db = new AppDB();
