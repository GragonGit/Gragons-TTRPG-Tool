import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { db } from '@data-access/database';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ThemeService } from './settings/data-access/theme.service';
import { SettingsMenuComponent } from './settings/feature/settings-menu.component';

@Component({
  selector: 'ttrpg-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  standalone: true,
  imports: [
    SettingsMenuComponent,

    RouterModule,
    TranslateModule,

    RouterOutlet
  ]
})
export class AppComponent {
  protected readonly environment = environment
  private translateService = inject(TranslateService)
  private themeService = inject(ThemeService)

  ngOnInit(): void {
    if (!environment.production) {
      db.delete()
      db.open()
    }
    this.setTranslateLang(localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) ?? this.translateService.getDefaultLang())
    this.themeService.setTheme(this.themeService.getTheme() ?? this.themeService.getDefaultTheme())
  }

  setTranslateLang(lang: string): void {
    this.translateService.use(lang)
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, lang)
  }
}
