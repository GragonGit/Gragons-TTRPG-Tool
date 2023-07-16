import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { BehaviorSubject, Observable } from 'rxjs';
import { db } from '../../database/db';
import { Character } from '../../models/Character';

@Injectable({
	providedIn: 'root'
})
export class CharacterService {
	characterSelected: BehaviorSubject<boolean> = new BehaviorSubject(false)

	/// [Database]

	getAllCharactersFromDb(sortBy: string = '', reversed: boolean = false) {
		return liveQuery(() => {
			const collection = db.characters.toCollection()
			if (reversed) {
				collection.reverse()
			}
			return collection.sortBy(sortBy)
		})
	}

	getCharacterFromDbById(id: number) {
		return db.characters.get(id)
	}

	addCharacterToDb(character: Character) {
		return db.characters.add(character)
	}

	updateCharacter(character: Character, changes: any) {
		db.characters.update(character, changes)
	}

	deleteCharacter(character: Character) {
		if (character.id) { db.characters.delete(character.id) }
	}

	/// [Getter and Setter]

	setCharacterSelected(selected: boolean) {
		this.characterSelected.next(selected)
	}

	isCharacterSelected(): Observable<boolean> {
		return this.characterSelected.asObservable()
	}
}
