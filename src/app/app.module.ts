import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { NewsModule } from './news/news.module';
import { NewsRoutingModule } from './news/news-routing.module';
import { DefaultImageUrlPipe, DateTransformPipe } from './pipes';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, DefaultImageUrlPipe, DateTransformPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NewsModule,
    NewsRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    DefaultImageUrlPipe, DateTransformPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
