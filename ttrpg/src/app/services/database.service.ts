import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from "../database/db";
import { Character } from '../models/Character';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	getAllCharactersFromDb() {
		return liveQuery(() => db.characters.toArray())
	}

	getCharacterFromDbById(id: number) {
		return db.characters.get(id)
	}

	addCharacterToDb(character: Character) {
		db.characters.add(character)
	}

	updateCharacter(character: Character, changes: any) {
		db.characters.update(character, changes)
	}
}
