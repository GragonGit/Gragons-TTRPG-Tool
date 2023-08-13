import { Stat } from "src/app/models/Stat"

export const emptyStat: Stat = {
	statName: '',
	value: '',
	isNumberStat: false
}

export const newStat: Stat = {
	statName: 'Neuer Stat',
	value: '',
	isNumberStat: false
}

export const profileStats: Stat[] = createStatsArray()



function createStatsArray(): Stat[] {
	const firstStat: Stat = {
		statName: 'Rasse',
		value: '',
		isNumberStat: false
	}

	const secondStat: Stat = {
		statName: 'Alter',
		value: '20',
		isNumberStat: true
	}

	return [firstStat, secondStat]
}