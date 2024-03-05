import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from '@ui/icon-button/icon-button.component';
import { SettingsItemComponent } from '../ui/settings-item/settings-item.component';

@Component({
  selector: 'ttrpg-settings-menu',
  standalone: true,
  imports: [
    IconButtonComponent,
    SettingsItemComponent,

    TranslateModule
  ],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.sass'
})
export class SettingsMenuComponent {
  private router = inject(Router)
  isOpen: boolean = false

  onMenuButtonClick(): void {
    this.isOpen = !this.isOpen
  }

  navigateToHome(): void {
    this.closeSettings()
    this.router.navigate(['home'])
  }

  navigateToImprint(): void {
    this.closeSettings()
    this.router.navigate(['imprint'])
  }

  private closeSettings(): void {
    this.isOpen = false
  }
}
