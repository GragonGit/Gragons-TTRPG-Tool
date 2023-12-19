import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '@data-access/database';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    IconComponent,

    TranslateModule,

    DatePipe
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.sass'
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
