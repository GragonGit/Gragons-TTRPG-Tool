import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { db } from "./database/db";
import * as themes from './resources/constants/Themes';
import { CharacterService } from './services/database/character.service';
import { ThemeService } from './services/settings/theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	@HostBinding('class') className = themes.darkMode;
	themeIcon: Observable<string> = this.themeService.getCurrentIcon()

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
		this.themeService.changeTheme()
		this.className = this.themeService.getCurrentTheme()
	}

	constructor(
		private characterService: CharacterService,
		private themeService: ThemeService
	) { }

}
