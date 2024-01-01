import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@data-access/database';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    DeleteButtonComponent,
    IconComponent,

    CommonModule,
    TranslateModule,

    DatePipe
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.sass'
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() fileNameChangeEvent = new EventEmitter<string>()
  @Output() deleteCharacterEvent = new EventEmitter<void>()

  inSettings = false

  handleDeleteButton(): void {
    this.deleteCharacterEvent.emit()
  }

  handleFileNameChange(inputValue: string): void {
    this.fileNameChangeEvent.emit(inputValue)
  }

  handleSettingsButton(): void {
    this.inSettings = !this.inSettings
  }
}
