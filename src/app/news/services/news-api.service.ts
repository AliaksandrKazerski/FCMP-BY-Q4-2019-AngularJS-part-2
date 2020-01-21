import { Injectable } from '@angular/core';

import { OneNewsModel } from '../models/one-news.model';
import { NewsServicesModule } from '../news-services.module';

const source = [
  'ABC',
  'CBN',
  'RTL',
  'BBC',
  'CNN',
];

const newsList = [
  new OneNewsModel(
    '5de3c84a87c8cc46046586d4',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d5',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d6',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d7',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d8',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d9',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d10',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d11',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d12',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
  new OneNewsModel(
    '5de3c84a87c8cc46046586d13',
    'general',
    'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    'en',
    'Al Jazeera English',
    'http://www.aljazeera.com',
    false,
  ),
];

const newsListPromise = Promise.resolve(newsList);
const sourcePromise = Promise.resolve(source);

@Injectable({
  providedIn: NewsServicesModule
})
export class NewsApiService {
  getNews(): Promise<OneNewsModel[]> {
    return newsListPromise;
  }

  getOneNews(id: string): Promise<OneNewsModel> {
    return this.getNews()
      .then(news => news.find(oneNews => oneNews._id === id))
      .catch(() => Promise.reject('Error in getMews method'));
  }

  createNews(news: OneNewsModel): void {
    newsList.push(news);
  }

  updateNews(news: OneNewsModel): void {
    const index = newsList.findIndex(oneNews => oneNews._id === news._id);

    if (index > -1) {
      newsList.splice(index, 1, news);
    }
  }

  deleteNews(news: OneNewsModel): void {
    const index = newsList.findIndex(oneNews => oneNews._id === news._id);

    if (index > -1) {
      newsList.splice(index, 1);
    }
  }

  getSource(): Promise <Array<string>> {
    return sourcePromise;
  }
}
