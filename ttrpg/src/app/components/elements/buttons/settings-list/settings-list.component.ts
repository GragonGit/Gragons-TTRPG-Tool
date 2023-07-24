import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/settings/theme.service';

@Component({
	selector: 'app-settings-list',
	templateUrl: './settings-list.component.html',
	styleUrls: ['./settings-list.component.sass']
})
export class SettingsListComponent {
	public themeIcon: Observable<string> = this.themeService.getCurrentIcon()

	/**
	 * Executes tasks related to pressing the theme button
	 */
	public themeButtonToggle(): void {
		this.themeService.changeTheme()
	}

	constructor(
		private themeService: ThemeService
	) { }
}
