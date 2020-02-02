import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import OneNewsModel from '../../models/one-news.model';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneNewsComponent {
  @Input() oneNews: OneNewsModel;

  @Output() deleteNews = new EventEmitter<OneNewsModel>();
  @Output() editNews = new EventEmitter<OneNewsModel>();

  onDeleteNews(): void {
    this.deleteNews.emit(this.oneNews);
  }

  onEditNews(): void {
    this.editNews.emit(this.oneNews);
  }
}
