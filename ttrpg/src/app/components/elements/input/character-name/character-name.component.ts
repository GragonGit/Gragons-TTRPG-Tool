import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from 'src/app/services/character.service';

@Component({
	selector: 'app-character-name',
	templateUrl: './character-name.component.html',
	styleUrls: ['./character-name.component.sass']
})
export class CharacterNameComponent {
	@Input() character: Character = emptyCharacter

	onChange() {
		this.characterService.updateCharacter(this.character, { name: this.character.name })
	}

	constructor(
		private characterService: CharacterService
	) { }
}
