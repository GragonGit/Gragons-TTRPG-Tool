import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const LANGUAGES: string[] = ['en', 'de']

@Component({
  selector: 'ttrpg-settings-language',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './settings-language.component.html',
  styleUrl: './settings-language.component.sass'
})
export class SettingsLanguageComponent implements OnInit {
  private translateService = inject(TranslateService)
  @Output() ttrpgLanguageChange = new EventEmitter<string>()
  selectedLanguage: string = this.translateService.getDefaultLang()
  languages = LANGUAGES

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) ?? this.selectedLanguage
  }

  onLanguageSelection(lang: string): void {
    if (lang === this.selectedLanguage) { return }
    this.selectedLanguage = lang
    this.ttrpgLanguageChange.emit(lang)
  }
}
