import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs';
import { darkModeIcon, lightModeIcon } from 'src/app/resources/constants/Icons';
import { darkMode, lightMode } from 'src/app/resources/constants/Themes';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private currentTheme: string = darkMode
	private currentIcon: BehaviorSubject<string> = new BehaviorSubject(lightModeIcon)

	changeTheme() {
		this.currentTheme = this.currentTheme === lightMode ? darkMode : lightMode
		this.currentIcon.next(this.currentTheme === lightMode ? darkModeIcon : lightModeIcon)
	}

	getCurrentTheme() {
		return this.currentTheme
	}

	getCurrentIcon() {
		return this.currentIcon.asObservable()
	}

	constructor(
		private cookieService: CookieService
	) { }
}
