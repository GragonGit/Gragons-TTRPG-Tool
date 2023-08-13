import { Stat } from "./Stat"

export interface Character {
	id?: number
	lastOpened?: Date
	fileName: string
	profileStats: Stat[]
}