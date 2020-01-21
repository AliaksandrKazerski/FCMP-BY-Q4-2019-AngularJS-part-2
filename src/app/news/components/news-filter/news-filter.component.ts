import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {
  sources: Array<string>;
  selectedSource: string;
  text: string;

  constructor(
    private newsApiService: NewsApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sources = [];
    this.text = '';
    this.newsApiService.getSource()
      .then(sources => {
        this.sources = sources
        this.selectedSource = sources[0];
      });
  }

  onFilterNews(): void {
    console.log(this.text, this.selectedSource);
  }

  onFilterNewsCreatedByMe(event): void {
    console.log(event.target.checked);
  }

  onGoToEdit(): void {
    this.router.navigate(['/edit']);
  }
}
