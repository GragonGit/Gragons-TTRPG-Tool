import { Component, EventEmitter, Output } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'app-new-character-card',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './new-character-card.component.html',
  styleUrl: './new-character-card.component.sass'
})
export class NewCharacterCardComponent {
  @Output() ttrpgNewCharacter = new EventEmitter<void>()

  addNewCharacter(): void {
    this.ttrpgNewCharacter.emit();
  }
}
