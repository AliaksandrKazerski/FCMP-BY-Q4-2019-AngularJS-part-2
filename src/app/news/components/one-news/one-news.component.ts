import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output,
} from '@angular/core';
import {DefaultImageUrlPipe} from '../../../pipes/default-image-url.pipe';

import OneNewsModel from '../../models/one-news.model';

const defaultUrl = 'https://dapp.dblog.org/img/default.jpg';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.scss'],
  providers: [DefaultImageUrlPipe]
})
export class OneNewsComponent implements OnInit{
  @Input() public oneNews: OneNewsModel;

  @Output() public deleteNews = new EventEmitter<OneNewsModel>();
  @Output() public editNews = new EventEmitter<OneNewsModel>();
  @Output() public goToNews = new EventEmitter<OneNewsModel>();

  constructor(private defaultImageUrl: DefaultImageUrlPipe) {}

  ngOnInit() {
    this.oneNews.urlToImage = this.defaultImageUrl.transform(this.oneNews.urlToImage, defaultUrl);
  }

  onDeleteNews(): void {
    this.deleteNews.emit(this.oneNews);
  }

  onEditNews(): void {
    this.editNews.emit(this.oneNews);
  }

  onGoToNews(): void {
    this.goToNews.emit(this.oneNews);
  }
}
