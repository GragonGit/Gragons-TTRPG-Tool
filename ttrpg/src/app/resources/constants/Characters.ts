import { Character } from "../../models/Character";

export const emptyCharacter: Character = {
	name: '',
	nickname: '',
	gender: '',
	race: '',
	age: '',
	height: '',
	weight: '',
	skinColor: '',
	hairColor: '',
	eyeColor: '',
	origin: ''
}

export const newCharacter: Character = createNewCharacter()

export const Characters: Character[] = createCharactersArray()



function createNewCharacter(): Character {
	const newCharacter = Object.assign({}, emptyCharacter)
	newCharacter.name = 'Neuer Charakter'
	return newCharacter
}

function createCharactersArray(): Character[] {
	const firstCharacter = {
		lastOpened: new Date(),
		name: 'Sylas',
		nickname: 'Sy',
		gender: 'Männlich',
		race: 'Mensch',
		age: '40',
		height: '1,70 m',
		weight: '100 kg',
		skinColor: 'hell',
		hairColor: 'braun',
		eyeColor: 'haselnuss',
		origin: 'Demacia'
	}

	const secondCharacter = Object.assign({}, emptyCharacter)
	secondCharacter.lastOpened = new Date(2023, 1, 24)
	secondCharacter.name = 'Zweilas'

	return [firstCharacter, secondCharacter]
}
