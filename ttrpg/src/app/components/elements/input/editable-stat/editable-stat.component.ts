import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Stat } from 'src/app/models/Stat';
import { emptyStat } from 'src/app/resources/constants/Stats';
import { DeleteProfileStatButtonComponent } from '../../buttons/delete-profile-stat-button/delete-profile-stat-button.component';

@Component({
	selector: 'app-editable-stat',
	templateUrl: './editable-stat.component.html',
	styleUrls: ['./editable-stat.component.sass']
})
export class EditableStatComponent {
	@Input() stat: Stat = emptyStat
	@Output() valueChangeEvent = new EventEmitter<Stat>()
	@Output() deleteStatEvent = new EventEmitter<void>()
	@ViewChild(DeleteProfileStatButtonComponent) deleteButton!: DeleteProfileStatButtonComponent;

	/**
	 * Resets the deletion button of the profile stat
	 */
	onDeleteButtonLeave() {
		this.deleteButton.confirmDeletion = false
	}

	/**
	 * Emits the new value of the changed input element
	 */
	public emitValueChange(): void {
		this.valueChangeEvent.emit(this.stat)
	}

	/**
	 * Emits the delete stat event
	 */
	public emitDeleteStatEvent(): void {
		this.deleteStatEvent.emit()
	}

}
