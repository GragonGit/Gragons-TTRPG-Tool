import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
	selector: 'app-no-character-selected',
	templateUrl: './no-character-selected.component.html',
	styleUrls: ['./no-character-selected.component.sass']
})
export class NoCharacterSelectedComponent {
	characters: Character[] = []

	ngOnInit() {
		
	}

	openCharacterHandler() {

	}

	createNewCharacterHandler() {
	}
}
