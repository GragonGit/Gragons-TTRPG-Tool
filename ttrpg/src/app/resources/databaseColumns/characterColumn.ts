export const lastOpenedColumn: string = 'lastOpened'
export const nameColumn: string = 'name'
export const nicknameColumn: string = 'nickname'

export const allCharacterColumns: string = concatAllColumns()

function concatAllColumns(): string {
	return '++id'
		+ `,${lastOpenedColumn}`
		+ `,${nameColumn}`
		+ `,${nicknameColumn}`
}