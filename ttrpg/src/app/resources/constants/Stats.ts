import { NumberStat, Stat, StringStat } from "src/app/models/Stat"

export const emptyStringStat: StringStat = {
	statName: '',
	value: ''
}

export const emptyNumberStat: NumberStat = {
	statName: '',
	value: 0
}

export const newStringStat: StringStat = {
	statName: 'Neuer Stat',
	value: ''
}

export const newNumberStat: NumberStat = {
	statName: 'Neuer Stat',
	value: 0
}

export const profileStats: Stat[] = createStatsArray()


function createStatsArray(): Stat[] {
	const firstStat: StringStat = {
		statName: 'Rasse',
		value: ''
	}

	const secondStat: NumberStat = {
		statName: 'Alter',
		value: 0
	}

	return [firstStat, secondStat]
}