import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'dexie';
import { Character } from 'src/app/models/Character';
import { newCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from "../../../services/database/character.service";

@Component({
	selector: 'app-startscreen',
	templateUrl: './startscreen.component.html',
	styleUrls: ['./startscreen.component.sass']
})
export class StartscreenComponent {
	public characters: Observable<Character[]> = this.characterService.getAllCharactersFromDb('lastOpened', true)

	/**
	 * Creates a new character from the newCharacter template
	 */
	public createNewCharacter() {
		const character = Object.assign({}, newCharacter)
		this.characterService.setCharacter(character)
		this.characterService.addCharacterToDb(character)
			.then((id) => {
				this.characterService.updateCharacterInDb(character, { lastOpened: new Date })
				this.router.navigate([`../profile/${id}`])
			})
	}

	constructor(
		private router: Router,
		private characterService: CharacterService
	) { }
}
