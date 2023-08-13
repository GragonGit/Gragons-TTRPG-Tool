export const allIndexedCharacterColumns: string = concatAllIndexedColumns()

function concatAllIndexedColumns(): string {
	return '++id'
		+ ', lastOpened'
		+ ', fileName'
}