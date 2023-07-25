import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/Character';
import { emptyCharacter } from 'src/app/resources/constants/Characters';

import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	public character: Character = emptyCharacter

	ngOnInit() {
		this.characterService.setSelectedCharacterWithId(Number(this.activatedRoute.snapshot.paramMap.get('id')))
		this.characterService.getCharacter().subscribe(character => {
			this.character = character
		})
	}

	constructor(
		private activatedRoute: ActivatedRoute,
		private characterService: CharacterService
	) { }
}
