import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFormComponent, NewsComponent, ArticleComponent } from './components';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'news/:articleID',
    component: ArticleComponent,
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
