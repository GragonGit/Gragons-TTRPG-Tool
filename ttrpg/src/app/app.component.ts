import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { db } from "./database/db";
import { emptyCharacter } from './resources/constants/Characters';
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

		this.themeService.getCurrentTheme().subscribe(theme => {
			this.currentTheme = theme
		})
	}

	/**
	 * Executes tasks related to changes of the router outlet
	 */
	public routerOutletActivation() {
		const url = this.route.url

		if (url.includes('/home') || url.includes('/about')) {
			this.characterService.setCharacter(emptyCharacter)
		}
	}

	constructor(
		private route: Router,
		private characterService: CharacterService,
		private themeService: ThemeService
	) { }

	protected readonly environment = environment;
}
