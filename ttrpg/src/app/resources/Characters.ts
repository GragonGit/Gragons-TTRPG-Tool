import { Character } from "../models/Character";

export const Characters: Character[] = [
	{ name: 'Sylas', lastOpened: new Date() },
	{ name: 'Zweilas', lastOpened: new Date(2023, 8, 23) },
	{ name: 'Dreilas' }
]

export const newCharacter: Character = { name: 'Neuer Charakter' }

export const emptyCharacter: Character = {}