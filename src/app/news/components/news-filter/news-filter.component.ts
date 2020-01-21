import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
