import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OneNewsModel } from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: Promise<Array<OneNewsModel>>;

  constructor(
    private newsApiService: NewsApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.news = this.newsApiService.getNews();
  }

  onDeleteNews(oneNews: OneNewsModel): void {
    this.newsApiService.deleteNews(oneNews);
  }

  onEditNews(oneNews: OneNewsModel): void {
    const link = ['/edit', oneNews._id];
    this.router.navigate(link);
  }
}
