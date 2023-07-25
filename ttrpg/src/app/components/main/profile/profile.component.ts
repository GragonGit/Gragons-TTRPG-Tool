import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { emptyCharacter, newCharacter } from 'src/app/resources/constants/Characters';

import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	public character: Character = emptyCharacter

	ngOnInit() {
		this.setSelectedCharacter()
		this.characterService.getCharacter().subscribe(character => {
			this.character = character
		})
	}

	/**
	 * Sets the selected character by reading the id out of the url
	 */
	private setSelectedCharacter(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.characterService.getCharacterFromDbById(id).then((character) => {
			if (character) {
				this.setWithExistingCharacter(character)
			} else {
				this.setWithNewCharacter()
			}
		})
	}

	/**
	 * Setter for when the character already exists
	 * 
	 * @param character The existing character recieved from another source (e.g. the database)
	 */
	private setWithExistingCharacter(character: Character): void {
		this.characterService.setCharacter(character)
		this.characterService.updateCharacterInDb(this.character, { lastOpened: new Date })
	}

	/**
	 * Setter for when the character does not exist yet
	 * Creates a new character from newCharacter template
	 */
	private setWithNewCharacter(): void {
		this.characterService.setCharacter(Object.assign({}, newCharacter))
		this.characterService.addCharacterToDb(this.character)
			.then(() => this.characterService.updateCharacterInDb(this.character, { lastOpened: new Date }))
	}

	constructor(
		private route: ActivatedRoute,
		private characterService: CharacterService
	) { }
}
