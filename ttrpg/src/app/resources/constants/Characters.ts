import { Character } from "../../models/Character";
import { profileStats } from "./Stats";

export const emptyCharacter: Character = {
	name: '',
	profileStats: []
}

export const newCharacter: Character = {
	name: 'Neuer Charakter',
	profileStats: []
}

export const Characters: Character[] = createCharactersArray()



function createCharactersArray(): Character[] {
	const firstCharacter: Character = {
		lastOpened: new Date(),
		name: 'Sylas',
		profileStats: Array.from(profileStats)
	}

	const secondCharacter = Object.assign({}, emptyCharacter)
	secondCharacter.lastOpened = new Date(2023, 1, 24)
	secondCharacter.name = 'Zweilas'

	return [firstCharacter, secondCharacter]
}
