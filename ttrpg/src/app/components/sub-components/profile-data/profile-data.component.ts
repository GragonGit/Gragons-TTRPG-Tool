import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { Stat } from 'src/app/models/Stat';
import { emptyCharacter } from 'src/app/resources/constants/Characters';
import { newStat } from 'src/app/resources/constants/Stats';
import { CharacterService } from 'src/app/services/database/character.service';

@Component({
	selector: 'app-profile-data',
	templateUrl: './profile-data.component.html',
	styleUrls: ['./profile-data.component.sass']
})
export class ProfileDataComponent {
	public character: Character = emptyCharacter

	ngOnInit() {
		this.characterService.getCharacter().subscribe(character => {
			this.character = character
		})
	}

	/**
	 * Updates the character inside the database according to the submitted changes
	 */
	public onProfileStatChange(index: number, changedStat: Stat): void {
		this.character.profileStats[index] = changedStat
		this.characterService.updateCharacterInDb(this.character, { profileStats: this.character.profileStats })
	}

	/**
	 * Deletes the profile stat of a character regarding to its indexed position inside the profile stat array
	 * If there is now element at said index nothing happens
	 * 
	 * @param index The index of the stat that is deleted
	 */
	public deleteStat(index: number) {
		const profileStats = this.character.profileStats
		for (let i = index; i < profileStats.length - 1; i++) {
			profileStats[i] = profileStats[i + 1]
		}
		profileStats.pop()
		this.characterService.updateCharacterInDb(this.character, { profileStats: profileStats })
	}

	/**
	 * Adds a new stat to the profileStats array
	 * 
	 * @param isNumberStat True when the new stat is a number stat
	 */
	public addNewStat(isNumberStat: boolean) {
		const stat = Object.assign({}, newStat)
		stat.isNumberStat = isNumberStat
		this.character.profileStats.push(stat)
		this.characterService.updateCharacterInDb(this.character, { profileStats: this.character.profileStats })
	}

	constructor(
		public characterService: CharacterService
	) { }
}
