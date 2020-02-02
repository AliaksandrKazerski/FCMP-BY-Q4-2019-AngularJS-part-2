import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { NewsServicesModule } from './news-services.module';
import {
  NewsListComponent,
  OneNewsComponent,
  NewsFormComponent,
  NewsComponent,
  NewsFilterComponent,
  ArticleComponent,
 } from './components';

@NgModule({
  declarations: [
    NewsListComponent,
    OneNewsComponent,
    NewsFormComponent,
    NewsComponent,
    NewsFilterComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModule,
    NewsServicesModule
  ]
})
export class NewsModule { }
