import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { db } from '@data-access/database';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    TranslateModule,

    RouterOutlet
  ]
})
export class AppComponent {
  ngOnInit(): void {
    if (!environment.production) {
      db.delete()
      db.open()
    }
  }

  protected readonly environment = environment;
}
