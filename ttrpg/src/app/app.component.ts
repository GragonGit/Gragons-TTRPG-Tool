import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { db } from "./database/db";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
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
