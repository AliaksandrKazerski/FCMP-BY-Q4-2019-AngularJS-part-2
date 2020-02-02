import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import OneNewsModel from '../../models/one-news.model';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  oneNews: OneNewsModel;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.oneNews = this.newsApiService.getOneNews(this.route.snapshot.paramMap.get('articleID'));
  }

  onDeleteNews(): void {
    this.deleteNews.emit(this.oneNews);
  }

  onEditNews(): void {
    this.editNews.emit(this.oneNews);
  }
}

