import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [
    IconComponent,

    TranslateModule
  ],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.sass'
})
export class DeleteButtonComponent {
  @Output() deleteCharacterEvent = new EventEmitter<void>()

  isPressed = false

  handleDeleteButton(): void {
    this.isPressed = true
  }

  confirmDeletion(): void {
    this.deleteCharacterEvent.emit()
  }

  declineDeletion() {
    this.isPressed = false
  }

}
