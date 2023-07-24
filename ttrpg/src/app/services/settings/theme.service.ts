import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject, Observable } from 'rxjs';
import { themeCookieKey } from 'src/app/resources/constants/CookieKeys';
import { darkModeIcon, lightModeIcon } from 'src/app/resources/constants/Icons';
import { darkMode, lightMode } from 'src/app/resources/constants/Themes';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private currentTheme: BehaviorSubject<string> = new BehaviorSubject(
		this.cookieService.get(themeCookieKey) === lightMode ? lightMode : darkMode)

	private currentIcon: BehaviorSubject<string> = new BehaviorSubject(
		this.cookieService.get(themeCookieKey) === lightMode ? darkModeIcon : lightModeIcon)

	/**
	 * Changes the theme between light and dark mode and sets related cookie accordingly
	 * 
	 * @returns The new theme that was changed to
	 */
	public changeTheme(): void {
		const newTheme = this.cookieService.get(themeCookieKey) === lightMode ? darkMode : lightMode
		this.cookieService.put(themeCookieKey, newTheme)
		this.currentTheme.next(newTheme)
		this.currentIcon.next(newTheme === lightMode ? darkModeIcon : lightModeIcon)
	}

	/**
	 * Gets the current theme according to the cookie
	 * If no cookie is present 'darkMode' is returned by default
	 * 
	 * @returns The current theme set in cookie
	 */
	public getCurrentTheme(): Observable<string> {
		return this.currentTheme.asObservable()
	}

	/**
	 * Gets the icon name as an observable
	 * 
	 * @returns The icon name as an observable
	 */
	public getCurrentIcon(): Observable<string> {
		return this.currentIcon.asObservable()
	}

	constructor(
		private cookieService: CookieService
	) { }
}
