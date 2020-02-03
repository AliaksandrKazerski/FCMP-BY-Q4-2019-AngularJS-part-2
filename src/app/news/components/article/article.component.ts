import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  title: string;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.title = 'created by me';
    this.oneNews = this.newsApiService.getOneNews(this.route.snapshot.paramMap.get('articleID'));
  }

  onDeleteNews(): void {
    this.newsApiService.deleteNews(this.oneNews);
    this.router.navigate(['/news']);
  }

  onEditNews(): void {
    const link = ['/edit', this.oneNews.id];
    this.router.navigate(link);
  }
}

