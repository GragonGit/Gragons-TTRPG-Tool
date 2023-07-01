import { Injectable } from '@angular/core';
import { db } from "../database/db";
import { Character } from '../models/Character';
import { liveQuery } from 'dexie';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	getAllCharactersFromDb() {
		return liveQuery(() => db.characters.toArray())
	}

	getCharacterFromDbById(id: number) {
		return liveQuery(() => db.characters.get(id))
	}

	addCharacterToDb(character: Character) {
		db.characters.add(character)
	}
}
