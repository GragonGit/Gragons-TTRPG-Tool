import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartscreenComponent } from './components/main/startscreen/startscreen.component';
import { ProfileComponent } from './components/main/profile/profile.component';

const routes: Routes = [
	{ path: 'start', component: StartscreenComponent },
	{ path: 'profile/:id', component: ProfileComponent},

	{ path: '', redirectTo: '/start', pathMatch: 'full' },
	{ path: '**', component: StartscreenComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
