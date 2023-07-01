import { Component } from '@angular/core';
import { Observable } from 'dexie';
import { Character } from 'src/app/models/Character';
import { DatabaseService } from "../../../services/database.service";

@Component({
	selector: 'app-no-character-selected',
	templateUrl: './no-character-selected.component.html',
	styleUrls: ['./no-character-selected.component.sass']
})
export class NoCharacterSelectedComponent {
	characters: Observable<Character[]> = this.databaseService.getAllCharactersFromDb()

	ngOnInit() {
	}

	openCharacterHandler() {

	}

	createNewCharacterHandler() {
	}

	constructor(
		private databaseService: DatabaseService
	) {}
}
