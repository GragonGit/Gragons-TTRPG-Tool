import { Component } from '@angular/core';
import { CharacterCardComponent } from '../ui/character-card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  characters: any[] = [1,2,3,4,5,6,7,8]
}
