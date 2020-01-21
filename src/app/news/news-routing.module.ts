import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFormComponent, NewsComponent } from './components';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'edit/:oneNewsID',
    component: NewsFormComponent,
  },
  {
    path: 'edit',
    component: NewsFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
