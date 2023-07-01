import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { DatabaseService } from "../../../services/database.service";

@Component({
	selector: 'app-no-character-selected',
	templateUrl: './no-character-selected.component.html',
	styleUrls: ['./no-character-selected.component.sass']
})
export class NoCharacterSelectedComponent {
	characters: Character[] = []

	ngOnInit() {
		this.setCharacters()
	}

	openCharacterHandler() {

	}

	createNewCharacterHandler() {
	}

	setCharacters() {
		return this.databaseService.getAllCharactersFromDb().then((characters) => this.characters = characters)
	}

	constructor(
		private databaseService: DatabaseService
	) {}
}
