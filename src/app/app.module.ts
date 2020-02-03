import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, CustomHeaderComponent } from './components';
import { LayoutModule } from './layout/layout.module';
import { NewsModule } from './news/news.module';
import { NewsRoutingModule } from './news/news-routing.module';
import { DefaultImageUrlPipe, DateTransformPipe } from './pipes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultImageUrlPipe,
    DateTransformPipe,
    CustomHeaderComponent,
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
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(CustomHeaderComponent, {injector: this.injector});
    customElements.define('app-custom-header', customElement);
  }
}
