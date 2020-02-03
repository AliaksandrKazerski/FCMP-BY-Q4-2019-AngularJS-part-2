import {Component, OnInit} from '@angular/core';
import FilterParams from 'src/app/core/interfaces/filter-params';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  filterNewsParams: FilterParams;
  filterCreatedByMeParam: boolean;
  headerValue: string;

  ngOnInit(): void {
    this.filterNewsParams = {sources: 'abc-news'};
    this.headerValue = this.filterCreatedByMeParam ? 'created by me' : this.filterNewsParams.sources;
  }

  onFilterNewsChange(params: FilterParams): void {
    this.filterNewsParams = params;
    this.headerValue = params.sources;
  }

  onFilterCreatedByMeChange(param: boolean): void {
    this.filterCreatedByMeParam = param;
    if (param) {
      this.headerValue = 'created by me';
    }
  }
}
