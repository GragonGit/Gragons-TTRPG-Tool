import { Component } from '@angular/core';
import { Observable } from 'dexie';
import { Character } from 'src/app/models/Character';
import { DatabaseService } from "../../../services/database.service";

@Component({
	selector: 'app-startscreen',
	templateUrl: './startscreen.component.html',
	styleUrls: ['./startscreen.component.sass']
})
export class StartscreenComponent {
	characters: Observable<Character[]> = this.databaseService.getAllCharactersFromDb('lastOpened', true)

	constructor(
		private databaseService: DatabaseService
	) { }
}
