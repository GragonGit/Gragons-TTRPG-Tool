import { Component, Input } from '@angular/core';
import { Character } from '@data-access/database';

@Component({
  selector: 'ttrpg-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.sass'
})
export class CharacterCardComponent {
  @Input({ required: true }) character: Character | undefined
}
