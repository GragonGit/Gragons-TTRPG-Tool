import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	character: Character = { name: 'Neuer Charakter' }

	ngOnInit() {
		this.setCharacter()
	}

	setCharacter() {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.databaseService.getCharacterFromDbById(id).subscribe((character) => {
			if (typeof character != "undefined") {
				this.character = character
			}
		})
	}

	constructor(
		private route: ActivatedRoute,
		private databaseService: DatabaseService
	) { }
}
