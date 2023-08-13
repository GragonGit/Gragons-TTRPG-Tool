import { Character } from "../../models/Character";
import { profileStats } from "./Stats";

export const emptyCharacter: Character = {
	fileName: '',
	profileStats: []
}

export const newCharacter: Character = {
	fileName: 'Neuer Charakter',
	profileStats: []
}

export const Characters: Character[] = createCharactersArray()



function createCharactersArray(): Character[] {
	const firstCharacter: Character = {
		lastOpened: new Date(),
		fileName: 'Sylas',
		profileStats: Array.from(profileStats)
	}

	const secondCharacter = Object.assign({}, emptyCharacter)
	secondCharacter.lastOpened = new Date(2023, 1, 24)
	secondCharacter.fileName = 'Zweilas'

	return [firstCharacter, secondCharacter]
}
