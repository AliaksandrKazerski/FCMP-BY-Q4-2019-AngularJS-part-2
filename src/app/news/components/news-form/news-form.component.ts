import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import OneNewsModel from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

import { switchMap } from 'rxjs/operators';
import Source from '../../models/source.model';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  oneNews: OneNewsModel;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.oneNews = new OneNewsModel;
    const id = this.route.snapshot.paramMap.get('oneNewsID');
    console.log(id);

    if (id) {
      this.oneNews = this.newsApiService.getOneNews(id);
    }
  }

  onSaveNews(): void {
    const oneNews = {...this.oneNews} as OneNewsModel;

    if (oneNews.id) {
      this.newsApiService.updateNews(oneNews);
    } else {
      oneNews.id = `${Math.random() * 10e16}`
      oneNews.source = new Source(null, 'Created by me');
      oneNews.createdByMe = true;
      this.newsApiService.createNews(oneNews);
    }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/news']);
  }
}
