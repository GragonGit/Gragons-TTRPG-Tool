import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartscreenComponent } from './components/main/startscreen/startscreen.component';

const routes: Routes = [
	{ path: 'start', component: StartscreenComponent },
	{ path: '', redirectTo: '/start', pathMatch: 'full' },
	{ path: '**', component: StartscreenComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
