import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-character-name',
	templateUrl: './character-name.component.html',
	styleUrls: ['./character-name.component.sass']
})
export class CharacterNameComponent {
	public character: Character = emptyCharacter

	ngOnInit() {
		this.characterService.getCharacter().subscribe(character => {
			this.character = character
		})
	}

	/**
	 * Executes tasks related to changes in the name input
	 */
	public onNameInputChange(): void {
		this.characterService.updateCharacterInDb(this.character, { fileName: this.character.fileName })
	}

	constructor(
		private characterService: CharacterService
	) { }
}
