import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoCharacterSelectedComponent } from './components/startscreen/no-character-selected/no-character-selected.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
	declarations: [
		AppComponent,
		NoCharacterSelectedComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		AppRoutingModule,

		MatButtonModule,
		MatCardModule,
		MatSidenavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
