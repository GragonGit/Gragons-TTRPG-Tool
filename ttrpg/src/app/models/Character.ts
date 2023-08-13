import { Stat } from "./Stat"

export interface Character {
	id?: number
	lastOpened?: Date
	name: string
	profileStats: Stat[]
}