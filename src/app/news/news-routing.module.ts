import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent, NewsFormComponent } from './components';

const routes: Routes = [
  {
    path: 'news',
    component: NewsListComponent,
  },
  {
    path: 'edit/:oneNewsID',
    component: NewsFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
