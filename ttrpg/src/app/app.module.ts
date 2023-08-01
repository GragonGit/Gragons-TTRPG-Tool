import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomDatePipe } from "./pipes/custom.datepipe";
import { TruncatePipe } from "./pipes/custom.truncatepipe";

import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";

import { CookieBannerComponent } from './components/elements/banners/cookie-banner/cookie-banner.component';
import { CharacterListElementComponent } from './components/elements/buttons/character-list-element/character-list-element.component';
import { DeleteCharacterButtonComponent } from './components/elements/buttons/delete-character-button/delete-character-button.component';
import { NavigationButtonsComponent } from './components/elements/buttons/navigation-buttons/navigation-buttons.component';
import { NavigationListComponent } from './components/elements/buttons/navigation-list/navigation-list.component';
import { SettingsListComponent } from './components/elements/buttons/settings-list/settings-list.component';
import { CharacterNameComponent } from './components/elements/input/character-name/character-name.component';
import { ProfileDataComponent } from './components/elements/input/profile-data/profile-data.component';
import { AboutComponent } from './components/main/about/about.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { StartscreenComponent } from './components/main/startscreen/startscreen.component';
import { ProfileRoleComponent } from './components/elements/input/profile-role/profile-role.component';


@NgModule({
	declarations: [
		AppComponent,

		CustomDatePipe,
		TruncatePipe,

		StartscreenComponent,
		ProfileComponent,
		CharacterNameComponent,
		DeleteCharacterButtonComponent,
		CharacterListElementComponent,
		NavigationButtonsComponent,
		NavigationListComponent,
		CookieBannerComponent,
		SettingsListComponent,
		AboutComponent,
		ProfileDataComponent,
  ProfileRoleComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		AppRoutingModule,

		CookieModule.withOptions(),

		MatButtonModule,
		MatCardModule,
		MatSidenavModule,
		MatListModule,
		MatDividerModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonToggleModule,
		MatMenuModule,
		MatSnackBarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
