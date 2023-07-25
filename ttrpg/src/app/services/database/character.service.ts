import { Injectable } from '@angular/core';
import { Observable as DexieObservable, PromiseExtended, liveQuery } from 'dexie';
import { BehaviorSubject, Observable } from 'rxjs';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { db } from '../../database/db';
import { Character } from '../../models/Character';

@Injectable({
	providedIn: 'root'
})
export class CharacterService {
	private character: BehaviorSubject<Character> = new BehaviorSubject(emptyCharacter)
	private characterSelected: BehaviorSubject<boolean> = new BehaviorSubject(false)

	/// [Database]

	/**
	 * Gets all characters from the database
	 * Additional parameters may be set to adjust result of query
	 * 
	 * @param sortBy String containing the column to be sorted by. Default: ''
	 * @param reversed Reverses the order of elements in collection. Default: false
	 * @returns An Observable of the search query result
	 */
	public getAllCharactersFromDb(sortBy: string = '', reversed: boolean = false): DexieObservable<Character[]> {
		return liveQuery(() => {
			const collection = db.characters.toCollection()
			if (reversed) {
				collection.reverse()
			}
			return collection.sortBy(sortBy)
		})
	}

	/**
	 * Retrieves a character from the database by its ID
	 * 
	 * @param id The id of the character
	 * @returns A promise containing the character if available in database
	 */
	public getCharacterFromDbById(id: number): PromiseExtended<Character | undefined> {
		return db.characters.get(id)
	}

	/**
	 * Adds the character to the database
	 * 
	 * @param character The character to be added to the database
	 * @returns A promise with the id of the added character
	 */
	public addCharacterToDb(character: Character): PromiseExtended<number> {
		return db.characters.add(character)
	}

	/**
	 * Updates the character's data inside the database
	 * 
	 * @param character The character which is updated
	 * @param changes The changed values with their key
	 */
	public updateCharacterInDb(character: Character, changes: any): void {
		db.characters.update(character, changes)
	}

	/**
	 * Deletes the character from the database
	 * 
	 * @param character The character that is deleted
	 */
	public deleteCharacterFromDb(character: Character): void {
		if (character.id) { db.characters.delete(character.id) }
	}

	/**
	 * Sets the currently selected character with the given id
	 * 
	 * @param id The id of the character
	 */
	public setSelectedCharacterWithId(id: number): void {
		this.getCharacterFromDbById(id).then((character) => {
			if (character) {
				this.setCharacter(character)
			}
		})
	}

	/// [Getter and Setter]

	/**
	 * Gets an observable of the character
	 * 
	 * @returns The character as an observable
	*/
	public getCharacter(): Observable<Character> {
		return this.character.asObservable()
	}

	/**
	 * Sets the character
	 * 
	 * @param character The new character
	 */
	public setCharacter(character: Character): void {
		this.setCharacterSelected(!(character === emptyCharacter))
		this.character.next(character)
	}

	/**
	 * Gets an observable whether a character is selected
	 * 
	 * @returns The characterSelected field as an observable
	*/
	public isCharacterSelected(): Observable<boolean> {
		return this.characterSelected.asObservable()
	}

	/**
	 * Sets the characterSelected value
	 * 
	 * @param selected Is character selected
	*/
	private setCharacterSelected(selected: boolean): void {
		this.characterSelected.next(selected)
	}
}
