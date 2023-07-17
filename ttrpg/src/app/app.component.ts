import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
	@HostBinding('class') currentTheme = themes.darkMode;

	public themeIcon: Observable<string> = this.themeService.getCurrentIcon()
	public characterSelected: Observable<boolean> = this.characterService.isCharacterSelected()

	ngOnInit(): void {
		if (!environment.production) {
			db.delete()
			db.open()			
		}

		this.currentTheme = this.themeService.getCurrentTheme()
	}

	/**
	 * Executes tasks related to pressing the theme button
	 */
	public themeButtonToggle(): void {
		this.currentTheme = this.themeService.changeTheme()
	}

	constructor(
		private characterService: CharacterService,
		private themeService: ThemeService
	) { }

}
