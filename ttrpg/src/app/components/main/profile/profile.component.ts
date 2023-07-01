import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'dexie';
import { Character } from 'src/app/models/Character';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	character: Character = {name: 'Neuer Charakter'}
	
	ngOnInit() {
		this.setCharacter()
	}

	setCharacter() {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		console.log(id);
		var characterFromDB: Character | undefined
		this.databaseService.getCharacterFromDbById(id).subscribe((character) => characterFromDB = character)
		console.log(characterFromDB);
		
		if (typeof characterFromDB != "undefined") {
			this.character = characterFromDB
		}
		console.log(this.character);
	}

	constructor(
		private route: ActivatedRoute,
		private databaseService: DatabaseService
	) {}
}
