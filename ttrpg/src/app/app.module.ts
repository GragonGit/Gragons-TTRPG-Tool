import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { StartscreenComponent } from './components/startscreen/startscreen.component';
import { DrawerComponent } from './components/drawer/drawer.component';


@NgModule({
	declarations: [
		AppComponent,
		StartscreenComponent,
		DrawerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

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
