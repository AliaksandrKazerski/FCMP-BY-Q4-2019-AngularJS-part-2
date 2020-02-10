import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as queryString from 'query-string';

import { NewsServicesModule } from '../news-services.module';

import OneNewsModel from '../models/one-news.model';
import SourcesResponse from '../../core/interfaces/sources-response';
import NewsResponse from '../../core/interfaces/news-response';
import Source from '../models/source.model';
import FilterParams from 'src/app/core/interfaces/filter-params';

const newsListCreatedByMe = [];

@Injectable({
  providedIn: NewsServicesModule
})
export class NewsApiService {
  private API_KEY = 'c8be5c2d059540f09abe3ef3d55afcb0';
  private BASE_URL = 'https://newsapi.org/v2/';
  private SOURCES_ENDPOINT = 'sources';
  private NEWS_ENDPOINT = 'top-headlines';

  constructor(private http: HttpClient) {}

  public getNews(newsParams: FilterParams = { sources: 'abc-news' }, createdByMeParam: boolean = false): Promise<Array<OneNewsModel>> {
    const query = queryString.stringify(newsParams);
    return this.http
      .get<NewsResponse>(`${this.BASE_URL}${this.NEWS_ENDPOINT}?${query}&apiKey=${this.API_KEY}`)
      .toPromise()
      .then((response: NewsResponse) => response.articles.concat(newsListCreatedByMe))
      .then(news => news = createdByMeParam ? news.filter(news => news.createdByMe) : news)
      .catch(this.handleError);
  }

  public getOneNews(id: string): OneNewsModel {
    return newsListCreatedByMe.find(oneNews => oneNews.id === id);
  }

  public createNews(news: OneNewsModel): void {
    newsListCreatedByMe.push(news);
  }

  public updateNews(news: OneNewsModel): void {
    const index = newsListCreatedByMe.findIndex(oneNews => oneNews.id === news.id);

    if (index > -1) {
      newsListCreatedByMe.splice(index, 1, news);
    }
  }

  public deleteNews(news: OneNewsModel): void {
    const index = newsListCreatedByMe.findIndex(oneNews => oneNews.id === news.id);

    if (index > -1) {
      newsListCreatedByMe.splice(index, 1);
    }
  }

  public getSource(): Promise<Array<Source>> {
    return this.http
      .get<SourcesResponse>(`${this.BASE_URL}${this.SOURCES_ENDPOINT}?&apiKey=${this.API_KEY}`)
      .toPromise()
      .then((response: SourcesResponse) => response.sources)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
