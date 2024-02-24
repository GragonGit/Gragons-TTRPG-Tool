import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { db } from '@data-access/database';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

const DEFAULT_LANG: string = 'en'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,

    RouterOutlet
  ]
})
export class AppComponent {
  protected readonly environment = environment

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    if (!environment.production) {
      db.delete()
      db.open()
    }
    this.setTranslateLang(localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) ?? DEFAULT_LANG)
  }

  setTranslateLang(lang: string): void {
    this.translateService.use(lang)
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, lang)
  }
}
