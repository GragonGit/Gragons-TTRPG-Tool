import { Component, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { db } from "./database/db";
import * as themes from './resources/constants/Themes';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	@HostBinding('class') className = themes.darkMode;
	characterSelected: boolean = false

	ngOnInit() {
		if (!environment.production) {
			db.delete()
			db.open()
		}
	}

	themeButtonToggle(event: MouseEvent) {
		this.className = this.className === themes.lightMode ? themes.darkMode : themes.lightMode
	}

}
