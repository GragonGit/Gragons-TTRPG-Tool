import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs';
import { darkModeIcon, lightModeIcon } from 'src/app/resources/constants/Icons';
import { darkMode, lightMode } from 'src/app/resources/constants/Themes';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private currentIcon: BehaviorSubject<string> = new BehaviorSubject(
		this.cookieService.get('Theme') === lightMode ? darkModeIcon : lightModeIcon)

	changeTheme() {
		const newTheme = this.cookieService.get('Theme') === lightMode ? darkMode : lightMode
		this.cookieService.put('Theme', newTheme)
		this.currentIcon.next(newTheme === lightMode ? darkModeIcon : lightModeIcon)
		return this.getCurrentTheme()
	}

	getCurrentTheme() {
		return this.cookieService.get('Theme') ?? darkMode
	}

	getCurrentIcon() {
		return this.currentIcon.asObservable()
	}

	constructor(
		private cookieService: CookieService
	) { }
}
