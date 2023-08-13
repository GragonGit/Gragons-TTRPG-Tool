import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stat } from 'src/app/models/Stat';
import { emptyStat } from 'src/app/resources/constants/Stats';

@Component({
	selector: 'app-editable-stat',
	templateUrl: './editable-stat.component.html',
	styleUrls: ['./editable-stat.component.sass']
})
export class EditableStatComponent {
	@Input() stat: Stat = emptyStat
	@Output() valueChangeEvent = new EventEmitter<Stat>()

	/**
	 * Emits the new value of the changed input element
	 */
	public emitValueChange(): void {
		this.valueChangeEvent.emit(this.stat)
	}

}
