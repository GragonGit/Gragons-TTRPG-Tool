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
	public confirmDeletion: boolean = false

	/**
	 * Executes tasks related to clicking one of the deletion buttons
	 * 
	 * @param event The click event
	 * @param button The button which is pressed
	 */
	public onDeletionButtonsClick(event: MouseEvent, button: string): void {
		event.preventDefault();
		event.stopPropagation();

		switch (button) {
			// Change to confirm buttons
			case "delete":
				this.confirmDeletion = true
				break;

			// Delete character from db
			case "confirm":
				this.characterService.deleteCharacterFromDb(this.character)
				break;

			// Cancel confirmation
			case "cancel": default:
				this.confirmDeletion = false
		}
	}

	constructor(
		private characterService: CharacterService
	) { }
}
