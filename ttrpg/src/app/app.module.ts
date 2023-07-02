import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { StartscreenComponent } from './components/main/startscreen/startscreen.component';
import { DrawerComponent } from './components/main/drawer/drawer.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { CharacterNameComponent } from './components/elements/input/character-name/character-name.component';
import { DeleteCharacterButtonComponent } from './components/elements/buttons/delete-character-button/delete-character-button.component';
import { CharacterListElementComponent } from './components/elements/buttons/character-list-element/character-list-element.component';


@NgModule({
	declarations: [
		AppComponent,
		StartscreenComponent,
		DrawerComponent,
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
