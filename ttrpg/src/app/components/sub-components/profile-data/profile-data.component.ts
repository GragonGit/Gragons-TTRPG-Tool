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
	 * Executes tasks related to changing the character's name
	 */
	public onNameChange(newValue: string): void {
		this.characterService.updateCharacterInDb(this.character, { name: newValue })
	}

	/**
	 * Executes tasks related to changing the character's nick name
	 */
	public onNicknameChange(newValue: string): void {
		this.characterService.updateCharacterInDb(this.character, { nickname: newValue })
	}

	/**
	 * Executes tasks related to changing the character's age
	 */
	public onAgeChange(newValue: string): void {
		this.characterService.updateCharacterInDb(this.character, { age: newValue })
	}

	constructor(
		private characterService: CharacterService
	) { }
}
