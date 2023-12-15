import { Component } from '@angular/core';
import { db } from '@data-access/database';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [RouterOutlet]
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
