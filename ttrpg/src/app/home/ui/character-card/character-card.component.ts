import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
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
  placeholder = ''
  characterFileName = ''

  ngOnChanges(): void {
    this.placeholder = this.character.fileName
    this.characterFileName = this.character.fileName
  }

  handleDeleteButton(): void {
    this.deleteCharacterEvent.emit()
  }

  handleSettingsButton(): void {
    if (this.inSettings) {
      this.handleSettingsExit()
    }
    this.inSettings = !this.inSettings
  }

  private handleSettingsExit(): void {
    if (!this.characterFileName) {
      this.characterFileName = this.placeholder
    }
    this.fileNameChangeEvent.emit(this.characterFileName)
  }
}
