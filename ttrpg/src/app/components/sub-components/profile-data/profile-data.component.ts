import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-profile-data',
	templateUrl: './profile-data.component.html',
	styleUrls: ['./profile-data.component.sass']
})
export class ProfileDataComponent {
	public character: Character = emptyCharacter

	ngOnInit() {
		this.characterService.getCharacter().subscribe(character => {
			this.character = character
		})
	}

	/**
	 * Updates the character inside the database according to the submitted changes
	 */
	public onInputChange(changes: any): void {
		this.characterService.updateCharacterInDb(this.character, changes)
	}

	constructor(
		public characterService: CharacterService
	) { }
}
