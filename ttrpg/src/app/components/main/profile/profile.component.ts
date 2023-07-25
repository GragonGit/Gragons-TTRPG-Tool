import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';

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
		const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
		this.characterService.getCharacterFromDbById(id).then((character) => {
			if (character) {
				this.characterService.setCharacter(character)
				this.characterService.updateCharacterInDb(this.character, { lastOpened: new Date })
			}
		})
	}

	constructor(
		private activatedRoute: ActivatedRoute,
		private characterService: CharacterService
	) { }
}
