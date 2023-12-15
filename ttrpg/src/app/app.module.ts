import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomDatePipe } from "./pipes/custom.datepipe";
import { TruncatePipe } from "./pipes/custom.truncatepipe";



@NgModule({
	declarations: [
		AppComponent,

		CustomDatePipe,
		TruncatePipe,
	],
	imports: [
		BrowserModule,

		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
