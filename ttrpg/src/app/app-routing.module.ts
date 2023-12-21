import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/feature/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'imprint',
    loadComponent: () => import('./imprint/feature/imprint.component').then(c => c.ImprintComponent)
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
