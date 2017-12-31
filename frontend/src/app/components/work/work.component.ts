import { Component, HostListener, OnInit } from '@angular/core';

import { WORKDATA } from './work-data';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  title: string;
  workdata = WORKDATA;

  constructor() { }

  ngOnInit() {
    this.updateTitle(window.innerWidth)
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateTitle(window.innerWidth);
  }

  private updateTitle(width: number) {
    if(width <= 575) {
      this.title = 'my life';
    } else {
      this.title = '───my life───';
    }
  }

}
