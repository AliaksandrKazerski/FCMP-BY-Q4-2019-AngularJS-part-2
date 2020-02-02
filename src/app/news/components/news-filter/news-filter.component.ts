import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';
import { Router } from '@angular/router';

import Source from '../../models/source.model';
import FilterParams from '../../../core/interfaces/filter-params';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {
  @Output() filterNewsChange: EventEmitter<FilterParams> = new EventEmitter();
  @Output() filterCreatedByMeChange: EventEmitter<boolean> = new EventEmitter();

  sources: Array<Source>;
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
        this.sources = sources;
        this.selectedSource = sources[0].id;
      });
  }

  onFilterNews(): void {
    this.filterNewsChange.emit({q: this.text, sources: this.selectedSource});
  }

  onFilterNewsCreatedByMe(event: any): void {
    console.log(event.target.checked);
    this.filterCreatedByMeChange.emit(event.target.checked);
  }

  onGoToEdit(): void {
    this.router.navigate(['/edit']);
  }
}
