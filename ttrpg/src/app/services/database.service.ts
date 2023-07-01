import { Injectable } from '@angular/core';
import { db } from "../database/db";
import { Character } from '../models/Character';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	async getAllCharactersFromDb(): Promise<Character[]> {
		return await db.characters.toArray()
	}

	addCharacterToDb(character: Character) {
		db.characters.add(character)
	}
}
