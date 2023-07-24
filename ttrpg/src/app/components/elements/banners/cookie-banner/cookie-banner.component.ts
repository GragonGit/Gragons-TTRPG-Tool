import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie';
import { acceptCookiesCookieKey, cookieMessage } from 'src/app/resources/constants/CookieKeys';

@Component({
	selector: 'app-cookie-banner',
	templateUrl: './cookie-banner.component.html',
	styleUrls: ['./cookie-banner.component.sass']
})
export class CookieBannerComponent {
	ngOnInit() {
		if (this.cookieService.get(acceptCookiesCookieKey) != String(true)) {
			this.openSnackBar(cookieMessage, 'Verstanden')
		}
	}

	openSnackBar(message: string, action: string) {
		let snackBarRef = this.snackBarService.open(message, action);
		snackBarRef.afterDismissed().subscribe(() => {
			this.cookieService.put(acceptCookiesCookieKey, 'true')
		})
	}

	constructor(
		private snackBarService: MatSnackBar,
		private cookieService: CookieService
	) { }
}
