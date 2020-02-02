import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import queryString from 'query-string';

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
  private API_KEY: string = '&apiKey=c8be5c2d059540f09abe3ef3d55afcb0';
  private BASE_URL: string = 'https://newsapi.org/v2/';
  private SOURCES_ENDPOINT: string = 'sources?';
  private NEWS_ENDPOINT: string = 'top-headlines?';

  constructor(private http: HttpClient) {}

  getNews(newsParams: FilterParams = { sources: 'abc-news' }, createdByMeParam: boolean = false): Promise<Array<OneNewsModel>> {
    let query = queryString.stringify(newsParams);
    console.log(query);
    return this.http
      .get<NewsResponse>(`${this.BASE_URL}${this.NEWS_ENDPOINT}${query}${this.API_KEY}`)
      .toPromise()
      .then((response: NewsResponse) => response.articles.concat(newsListCreatedByMe))
      .then(news => news = createdByMeParam ? news.filter(news => news.createdByMe) : news)
      .catch(this.handleError);
  }

  getOneNews(id: string): Promise<OneNewsModel> {
    return this.getNews()
      .then(news => news.find(oneNews => oneNews.id === id))
      .catch(() => Promise.reject('Error in getMews method'));
  }

  createNews(news: OneNewsModel): void {
    newsListCreatedByMe.push(news);
  }

  updateNews(news: OneNewsModel): void {
    const index = newsListCreatedByMe.findIndex(oneNews => oneNews.id === news.id);

    if (index > -1) {
      newsListCreatedByMe.splice(index, 1, news);
    }
  }

  deleteNews(news: OneNewsModel): void {
    const index = newsListCreatedByMe.findIndex(oneNews => oneNews.id === news.id);

    if (index > -1) {
      newsListCreatedByMe.splice(index, 1);
    }
  }

  getSource(): Promise<Array<Source>> {
    return this.http
      .get<SourcesResponse>(`${this.BASE_URL}${this.SOURCES_ENDPOINT}${this.API_KEY}`)
      .toPromise()
      .then((response: SourcesResponse) => response.sources)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
