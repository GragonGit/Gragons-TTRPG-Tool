import { Component, EventEmitter, Output } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'ttrpg-new-character-button',
  standalone: true,
  imports: [
    IconComponent,
  ],
  templateUrl: './new-character-button.component.html',
  styleUrl: './new-character-button.component.sass'
})
export class NewCharacterButtonComponent {
  @Output() ttrpgAddNewCharacter = new EventEmitter<void>()

  onClick(): void {
    this.ttrpgAddNewCharacter.emit()
  }
}
