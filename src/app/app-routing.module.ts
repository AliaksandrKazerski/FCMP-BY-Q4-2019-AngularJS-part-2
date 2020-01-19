import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathNotFoundComponent } from "./layout/components";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full',
  },
  {
   path: '**',
   component: PathNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
