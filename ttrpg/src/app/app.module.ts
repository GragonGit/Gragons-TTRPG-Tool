import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomDatePipe } from "./pipes/custom.datepipe";
import { TruncatePipe } from "./pipes/custom.truncatepipe";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from "@angular/material/sidenav";

import { CharacterListElementComponent } from './components/elements/buttons/character-list-element/character-list-element.component';
import { DeleteCharacterButtonComponent } from './components/elements/buttons/delete-character-button/delete-character-button.component';
import { CharacterNameComponent } from './components/elements/input/character-name/character-name.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { StartscreenComponent } from './components/main/startscreen/startscreen.component';


@NgModule({
	declarations: [
		AppComponent,

		CustomDatePipe,
		TruncatePipe,

		StartscreenComponent,
		ProfileComponent,
		CharacterNameComponent,
		DeleteCharacterButtonComponent,
		CharacterListElementComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,

		AppRoutingModule,

		MatButtonModule,
		MatCardModule,
		MatSidenavModule,
		MatListModule,
		MatDividerModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
