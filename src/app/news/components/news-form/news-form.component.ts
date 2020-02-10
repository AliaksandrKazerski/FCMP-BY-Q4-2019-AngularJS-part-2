import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as uuid from 'uuid';

import { DateTransformPipe } from '../../../pipes/';

import OneNewsModel from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

import Source from '../../models/source.model';

const loginName = 'User';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  providers: [DateTransformPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFormComponent implements OnInit {
  oneNews: OneNewsModel;
  title: string;
  newsForm: FormGroup;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dateTransform: DateTransformPipe,
  ) { }

  ngOnInit(): void {
    this.title = 'edit';
    this.oneNews = new OneNewsModel();
    const id = this.route.snapshot.paramMap.get('oneNewsID');
    if (id) {
      this.oneNews = this.newsApiService.getOneNews(id);
    }
    if (!this.oneNews.publishedAt) {
      this.oneNews.publishedAt = this.dateTransform.transform(new Date());
    }
    if (!this.oneNews.autor) {
      this.oneNews.autor = loginName;
    }
    this.newsForm = new FormGroup({
      title: new FormControl( this.oneNews.title, Validators.required),
      description: new FormControl(this.oneNews.description, Validators.required),
      urlToImage: new FormControl(this.oneNews.urlToImage, Validators.required),
      publishedAt: new FormControl(this.oneNews.publishedAt, Validators.required),
      autor: new FormControl(this.oneNews.autor, Validators.required),
      url: new FormControl(this.oneNews.url, Validators.required),
      content: new FormControl(this.oneNews.content, Validators.required),
    });
  }

  onSaveNews(): void {
    const oneNews = {...this.newsForm.value} as OneNewsModel;

    if (oneNews.id) {
      this.newsApiService.updateNews(oneNews);
    } else {
      oneNews.id = `${uuid.v4()}`;
      oneNews.source = new Source(null, 'created by me');
      oneNews.createdByMe = true;
      this.newsApiService.createNews(oneNews);
    }

    this.router.navigate(['/news', oneNews.id]);
  }

  onGoBack(): void {
    this.router.navigate(['/news']);
  }
}
