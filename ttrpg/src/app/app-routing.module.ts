import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/feature/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/feature/home.component').then(c => c.HomeComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
