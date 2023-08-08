import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stat } from 'src/app/models/Stat';
import { emptyStringStat } from 'src/app/resources/constants/Stats';

@Component({
	selector: 'app-editable-stat',
	templateUrl: './editable-stat.component.html',
	styleUrls: ['./editable-stat.component.sass']
})
export class EditableStatComponent {
	@Input() stat: Stat = emptyStringStat
	@Output() valueChangeEvent = new EventEmitter<Stat>()

	/**
	 * Emits the new value of the changed input element
	 */
	public emitValueChange(): void {
		this.valueChangeEvent.emit(this.stat)
	}

	/**
	 * Saves the new stat name in respective table
	 * Emits the new value of the changed input element
	 */
	public onStatNameChange(): void {
		// TODO Save in profile stat table
		this.emitValueChange()
	}
}
