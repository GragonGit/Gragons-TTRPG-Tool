import { Component, Input } from '@angular/core';

@Component({
  selector: 'ttrpg-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.sass'
})
export class IconComponent {
  @Input({ required: true }) iconName: string = ''
}
