import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { emptyCharacter, newCharacter } from 'src/app/resources/constants/Characters';

import { CharacterService } from 'src/app/services/character.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	character: Character = emptyCharacter

	ngOnInit() {
		this.setCharacter()
	}

	setCharacter() {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.characterService.getCharacterFromDbById(id).then((character) => {
			if (character) {
				this.character = character
				this.characterService.updateCharacter(this.character, { lastOpened: new Date })
			} else {
				this.character = Object.assign({}, newCharacter)
				this.characterService.addCharacterToDb(this.character)
					.then(() => this.characterService.updateCharacter(this.character, { lastOpened: new Date }))
			}
			this.characterService.setCharacterSelected(true)
		})
	}

	constructor(
		private route: ActivatedRoute,
		private characterService: CharacterService
	) { }
}
