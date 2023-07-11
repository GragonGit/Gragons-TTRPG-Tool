import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { newCharacter, emptyCharacter } from 'src/app/resources/constants/Characters';

import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	character: Character = emptyCharacter

	ngOnInit() {
		this.setCharacter()
	}

	setCharacter() {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.databaseService.getCharacterFromDbById(id).then((character) => {
			if (character) {
				this.character = character
				this.databaseService.updateCharacter(this.character, { lastOpened: new Date })
			} else {
				this.character = Object.assign({}, newCharacter)
				this.databaseService.addCharacterToDb(this.character)
					.then(() => this.databaseService.updateCharacter(this.character, { lastOpened: new Date }))
			}
		})
	}

	constructor(
		private route: ActivatedRoute,
		private databaseService: DatabaseService
	) { }
}
