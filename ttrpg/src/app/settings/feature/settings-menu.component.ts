import { Component } from '@angular/core';
import { IconButtonComponent } from '@ui/icon-button/icon-button.component';
import { SettingsItemComponent } from '../ui/settings-item/settings-item.component';

@Component({
  selector: 'ttrpg-settings-menu',
  standalone: true,
  imports: [
    IconButtonComponent,
    SettingsItemComponent
  ],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.sass'
})
export class SettingsMenuComponent {
  isOpen: boolean = false

  onMenuButtonClick(): void {
    this.isOpen = !this.isOpen
  }
}
