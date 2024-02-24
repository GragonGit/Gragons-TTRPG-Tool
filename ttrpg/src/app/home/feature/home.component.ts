import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Character } from '@data-access/database';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CharactersService } from '../data-access/characters.service';
import { CharacterCardComponent } from '../ui/character-card/character-card.component';
import { NewCharacterCardComponent } from '../ui/new-character-card/new-character-card.component';

@Component({
  selector: 'ttrpg-home',
  standalone: true,
  imports: [
    CharacterCardComponent,
    NewCharacterCardComponent,

    CommonModule,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  characters: Observable<Character[]> = this.characterService.charactersObservable

  constructor(private characterService: CharactersService) { }

  addNewCharacter(): void {
    this.characterService.addNewCharacter()
  }

  onDeleteCharacter(character: Character): void {
    this.characterService.deleteCharacter(character)
  }

  onFileNameChange(character: Character, fileName: string): void {
    this.characterService.updateCharacter(character, { "fileName": fileName })
  }
}
