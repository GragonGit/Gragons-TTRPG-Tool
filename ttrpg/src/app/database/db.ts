import Dexie, { Table } from 'dexie';
import * as table from "./tables";
import * as data from "./data"

export class AppDB extends Dexie {
	characters!: Table<table.Character, number>;
	
	constructor() {
		super('ngdexieliveQuery');
		this.version(3).stores({
			characters: '++id',
		});
		this.on('populate', () => this.populate());
	}
	
	async populate() {
		await db.characters.bulkAdd(data.characters);
	}
}

export const db = new AppDB();
