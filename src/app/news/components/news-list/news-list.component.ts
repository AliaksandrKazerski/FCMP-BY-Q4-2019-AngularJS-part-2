import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { NewsApiService } from '../../services/news-api.service';
import OneNewsModel from '../../models/one-news.model';
import FilterParams from 'src/app/core/interfaces/filter-params';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() filterNewsParams: FilterParams;
  @Input() filterCreatedByMeParam: boolean;

  news: Array<OneNewsModel>;
  portionNews: Array<OneNewsModel>;
  index: number;

  constructor(
    private newsApiService: NewsApiService,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    this.newsApiService.getNews(this.filterNewsParams, this.filterCreatedByMeParam)
      .then(news => {
        this.news = news;
        console.log(this.news);
        this.portionNews = this.news.slice(0, this.index);
      });
  }

  ngOnInit(): void {
    this.index = 5;
    this.news = [];
  }

  onDeleteNews(oneNews: OneNewsModel): void {
    this.newsApiService.deleteNews(oneNews);
    this.newsApiService.getNews(this.filterNewsParams, this.filterCreatedByMeParam)
      .then(news => {
        this.news = news;
        console.log(this.news);
        this.portionNews = this.news.slice(0, this.index);
      });
  }

  onEditNews(oneNews: OneNewsModel): void {
    const link = ['/edit', oneNews.id];
    this.router.navigate(link);
  }

  onGoToNews(oneNews: OneNewsModel): void {
    if (oneNews.createdByMe) {
      const link = ['/news', oneNews.id]
      this.router.navigate(link);
    } else {
      window.location.href = oneNews.url;
    }
  }

  onAddNewsToPortion(): void {
    this.index += 5;
    this.portionNews = this.news.slice(0, this.index);
  }
}
