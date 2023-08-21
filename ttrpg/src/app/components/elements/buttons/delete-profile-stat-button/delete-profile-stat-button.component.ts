import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-delete-profile-stat-button',
	templateUrl: './delete-profile-stat-button.component.html',
	styleUrls: ['./delete-profile-stat-button.component.sass']
})
export class DeleteProfileStatButtonComponent {
	@Output() deleteStatEvent = new EventEmitter<void>()
	public confirmDeletion: boolean = false

	/**
	 * Executes tasks related to clicking one of the deletion buttons
	 * 
	 * @param event The click event
	 * @param button The button which is pressed
	 */
	public onDeletionButtonsClick(button: string): void {
		switch (button) {
			// Change to confirm buttons
			case "delete":
				this.confirmDeletion = true
				break;

			// Emit deletion event of a profile stat
			case "confirm":
				this.deleteStatEvent.emit()
				break;
		}
	}
}
