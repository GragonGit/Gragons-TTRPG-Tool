import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { db } from '@data-access/database';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

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

  ngOnInit(): void {
    if (!environment.production) {
      db.delete()
      db.open()
    }
    this.setTranslateLang(localStorage.getItem('lang') ?? 'en')
  }

  setTranslateLang(lang: string): void {
    this.translateService.use(lang)
    localStorage.setItem('lang', lang)
  }

  constructor(private translateService: TranslateService) { }

}
