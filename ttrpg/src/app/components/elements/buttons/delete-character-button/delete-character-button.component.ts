import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-delete-character-button',
	templateUrl: './delete-character-button.component.html',
	styleUrls: ['./delete-character-button.component.sass']
})
export class DeleteCharacterButtonComponent {
	@Input() character: Character = emptyCharacter
	confirm: boolean = false

	buttonClick(event: MouseEvent, button: string) {
		event.preventDefault();
		event.stopPropagation();

		switch (button) {
			case "delete":
				this.confirm = true
				break;

			case "confirm":
				this.characterService.deleteCharacter(this.character)
				break;

			case "cancel": default:
				this.confirm = false
		}
	}

	constructor(
		private characterService: CharacterService
	) { }
}
