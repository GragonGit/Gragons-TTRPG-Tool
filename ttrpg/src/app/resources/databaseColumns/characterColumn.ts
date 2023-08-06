export const allCharacterColumns: string = concatAllColumns()

function concatAllColumns(): string {
	return '++id'
		+ ', lastOpened'
		+ ', name'
		+ ', nickname'
}