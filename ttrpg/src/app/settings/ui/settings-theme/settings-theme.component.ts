import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../data-access/theme.service';

const THEMES: string[] = [
  'light',
  'light-medium-contrast',
  'light-high-contrast',
  'dark',
  'dark-medium-contrast',
  'dark-high-contrast'
]

@Component({
  selector: 'ttrpg-settings-theme',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './settings-theme.component.html',
  styleUrl: './settings-theme.component.sass'
})
export class SettingsThemeComponent {
  @Output() ttrpgThemeChange = new EventEmitter<string>()
  private themeService = inject(ThemeService)
  selectedTheme: string = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ?? this.themeService.getDefaultTheme()
  themes = THEMES

  onThemeSelection(theme: string) {
    this.themeService.setTheme(theme)
  }
}
