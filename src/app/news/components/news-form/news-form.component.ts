import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { OneNewsModel } from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

import { switchMap } from 'rxjs/operators';

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
    this.oneNews = new OneNewsModel();

    const observer = {
      next: (oneNews: OneNewsModel) => {
        this.oneNews = { ...oneNews};
      },
      error: (err: any) => console.log(err)
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.newsApiService.getOneNews(params.get('oneNewsID'))
        )
      )
      .subscribe(observer);
  }

  onSaveNews(): void {
    const oneNews = {...this.oneNews} as OneNewsModel;

    if (oneNews._id) {
      this.newsApiService.updateNews(oneNews);
    } else {
      this.newsApiService.createNews(oneNews);
    }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/news']);
  }
}
