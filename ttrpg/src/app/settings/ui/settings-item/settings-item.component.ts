import { Component, Input } from '@angular/core';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'ttrpg-settings-item',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './settings-item.component.html',
  styleUrl: './settings-item.component.sass'
})
export class SettingsItemComponent {
  @Input({ required: true }) iconName: string = ''
  @Input({ required: true }) text: string = ''
}
