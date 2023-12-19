import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Character } from '@data-access/database';
import { Observable } from 'rxjs';
import { CharactersService } from '../data-access/characters.service';
import { CharacterCardComponent } from '../ui/character-card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterCardComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  characters: Observable<Character[]> = this.characterService.charactersObservable

  constructor(private characterService: CharactersService) { }
}
