import { Component } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.sass'
})
export class CharacterCardComponent {

}
