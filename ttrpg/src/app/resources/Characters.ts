import { Character } from "../models/Character";

export const Characters: Character[] = [
	{ name: 'Sylas', lastOpened: new Date() },
	{ name: 'Zweilas', lastOpened: new Date(2023, 1, 24) },
	{ name: 'Dreilas' }
]

export const newCharacter: Character = { name: 'Neuer Charakter' }

export const emptyCharacter: Character = { name: '' }