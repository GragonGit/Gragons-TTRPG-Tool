import { Component } from '@angular/core';
import { Observable } from 'dexie';
import { Character } from 'src/app/models/Character';
import { CharacterService } from "../../../services/database/character.service";

@Component({
	selector: 'app-startscreen',
	templateUrl: './startscreen.component.html',
	styleUrls: ['./startscreen.component.sass']
})
export class StartscreenComponent {
	characters: Observable<Character[]> = this.characterService.getAllCharactersFromDb('lastOpened', true)

	constructor(
		private characterService: CharacterService
	) { }
}
