import { Stat, StringStat } from "./Stat"

export interface Character {
	id?: number
	lastOpened?: Date
	name: StringStat
	profileStats: Stat[]
}