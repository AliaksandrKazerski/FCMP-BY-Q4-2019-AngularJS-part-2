import { Component, OnInit } from '@angular/core';

import { OneNewsModel } from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  oneNews: OneNewsModel;

  constructor(private newsApiService: NewsApiService) { }

  ngOnInit(): void {
    this.oneNews = new OneNewsModel();
  }

  onSaveNews(): void {
    const oneNews = {...this.oneNews} as OneNewsModel;
    if (oneNews._id) {
      this.newsApiService.updateNews(oneNews);
    } else {
      this.newsApiService.createNews(oneNews);
    }
  }

  onGoBack(): void {}
}
