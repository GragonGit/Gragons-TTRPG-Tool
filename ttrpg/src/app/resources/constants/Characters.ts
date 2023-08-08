import { Character } from "../../models/Character";
import { profileStats } from "./Stats";

export const emptyCharacter: Character = {
	name: {
		statName: 'Name',
		value: ''
	},
	profileStats: []
}

export const newCharacter: Character = createNewCharacter()

export const Characters: Character[] = createCharactersArray()



function createNewCharacter(): Character {
	const newCharacter = Object.assign({}, emptyCharacter)
	newCharacter.name = {
		statName: 'Name',
		value: 'Neuer Charakter'
	}
	return newCharacter
}

function createCharactersArray(): Character[] {
	const firstCharacter: Character = {
		lastOpened: new Date(),
		name: {
			statName: 'Name',
			value: 'Sylas'
		},
		profileStats: Array.from(profileStats)
	}

	const secondCharacter = Object.assign({}, emptyCharacter)
	secondCharacter.lastOpened = new Date(2023, 1, 24)
	secondCharacter.name = {
		statName: 'Name',
		value: 'Zweilas'
	}

	return [firstCharacter, secondCharacter]
}
