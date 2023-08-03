import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-editable-stat',
	templateUrl: './editable-stat.component.html',
	styleUrls: ['./editable-stat.component.sass']
})
export class EditableStatComponent {
	@Input() stat: string = ''
	@Input() statName: string = ''
	@Output() valueChangeEvent = new EventEmitter<string>()

	/**
	 * Emits the new value of the changed input element
	 */
	public emitValueChange(): void {
		this.valueChangeEvent.emit(this.stat)
	}
}
