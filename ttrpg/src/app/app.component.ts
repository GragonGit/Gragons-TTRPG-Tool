import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { db } from "./database/db";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	characterSelected: boolean = false

	ngOnInit() {
		if (!environment.production) {
			db.delete()
			db.open()
		}
	}

}
