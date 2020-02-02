import { Component } from '@angular/core';
import FilterParams from 'src/app/core/interfaces/filter-params';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  filterNewsParams: FilterParams;
  filterCreatedByMeParam: boolean;

  onFilterNewsChange(params: FilterParams) {
    this.filterNewsParams = params;
  }

  onFilterCreatedByMeChange(param: boolean) {
    this.filterCreatedByMeParam = param;
  }
}
