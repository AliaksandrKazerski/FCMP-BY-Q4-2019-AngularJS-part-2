import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';

const classes = ['red', 'blue', 'black', 'orange', 'green'];

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CustomHeaderComponent implements OnInit, OnDestroy {

  @Input() label: string;

  interval: any;
  className: string;
  index: number;
  flag: boolean;


  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => this.changeColor(), 2000)
    this.index = 0;
  }

  changeColor(): void {
    this.className = classes[this.index];
    this.index++;
    if (this.index === classes.length) {
      this.index = 0;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
