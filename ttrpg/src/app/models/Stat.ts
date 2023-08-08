export interface Stat {
	id?: number
	statName: string
	value: number | string
}

export interface StringStat extends Stat {
	value: string
}

export interface NumberStat extends Stat {
	value: number
}
