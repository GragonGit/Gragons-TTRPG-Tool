import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartscreenComponent } from './components/main/startscreen/startscreen.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { AboutComponent } from './components/main/about/about.component';

const routes: Routes = [
	{ path: 'home', component: StartscreenComponent },
	{ path: 'profile/:id', component: ProfileComponent },
	{ path: 'about', component: AboutComponent },

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: StartscreenComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
