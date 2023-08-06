import { Character } from "../../models/Character";

export const emptyCharacter: Character = {
	name: '',
	nickname: '',
	age: ''
}

export const newCharacter: Character = createNewCharacter()

export const Characters: Character[] = createCharactersArray()



function createNewCharacter(): Character {
	const newCharacter = Object.assign({}, emptyCharacter)
	newCharacter.name = 'Neuer Charakter'
	return newCharacter
}

function createCharactersArray(): Character[] {
	const firstCharacter = Object.assign({}, emptyCharacter)
	firstCharacter.lastOpened = new Date()
	firstCharacter.name = 'Sylas Thatcher'
	firstCharacter.nickname = 'Sy'

	const secondCharacter = Object.assign({}, emptyCharacter)
	secondCharacter.lastOpened = new Date(2023, 1, 24)
	secondCharacter.name = 'Zweilas'

	return [firstCharacter, secondCharacter]
}
