import { Injectable } from '@angular/core';
import { db } from "../database/db";
import { Character } from '../models/Character';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	addCharacterToDb(character: Character) {
		db.characters.add(character)
	}
}
