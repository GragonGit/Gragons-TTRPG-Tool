import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { db } from "./database/db";
import * as icons from './resources/constants/Icons';
import * as themes from './resources/constants/Themes';
import { CharacterService } from './services/database/character.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	@HostBinding('class') className = themes.darkMode;
	themeIcon: string = icons.lightModeIcon

	characterSelected: Observable<boolean> = this.characterService.isCharacterSelected()

	ngOnInit() {
		if (!environment.production) {
			db.delete()
			db.open()
		}
	}

	homeButtonToggle() {
		this.characterService.setCharacterSelected(false)
	}

	themeButtonToggle() {
		this.className = this.className === themes.lightMode ? themes.darkMode : themes.lightMode
		this.themeIcon = this.className === themes.lightMode ? icons.darkModeIcon : icons.lightModeIcon
	}

	constructor(
		private characterService: CharacterService,
	) { }

}
