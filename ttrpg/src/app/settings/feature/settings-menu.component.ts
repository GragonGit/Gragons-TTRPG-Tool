import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconButtonComponent } from '@ui/icon-button/icon-button.component';
import { SettingsItemComponent } from '../ui/settings-item/settings-item.component';
import { SettingsLanguageComponent } from '../ui/settings-language/settings-language.component';
import { SettingsThemeComponent } from '../ui/settings-theme/settings-theme.component';

@Component({
  selector: 'ttrpg-settings-menu',
  standalone: true,
  imports: [
    IconButtonComponent,
    SettingsItemComponent,
    SettingsLanguageComponent,
    SettingsThemeComponent,

    TranslateModule
  ],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.sass'
})
export class SettingsMenuComponent {
  private router = inject(Router)
  private translateService = inject(TranslateService)
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

  setTranslateLang(lang: string): void {
    this.translateService.use(lang)
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, lang)
  }

  private closeSettings(): void {
    this.isOpen = false
  }
}
