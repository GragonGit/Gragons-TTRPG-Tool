import { Component, Input, ViewChild } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from 'src/app/services/database/character.service';
import { DeleteCharacterButtonComponent } from '../delete-character-button/delete-character-button.component';

@Component({
	selector: 'app-character-list-element',
	templateUrl: './character-list-element.component.html',
	styleUrls: ['./character-list-element.component.sass']
})
export class CharacterListElementComponent {
	@Input() character: Character = emptyCharacter
	@ViewChild(DeleteCharacterButtonComponent) deleteButton!: DeleteCharacterButtonComponent;

	onCharacterButtonLeave() {
		this.deleteButton.confirmDeletion = false
	}

	onCharacterButtonToggle() {
		this.characterService.updateCharacterInDb(this.character, { lastOpened: new Date })
	}

	constructor(
		private characterService: CharacterService
	) { }
}
