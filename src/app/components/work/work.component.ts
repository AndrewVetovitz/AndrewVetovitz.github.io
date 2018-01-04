import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { WORKDATA } from './work-data';
import { HeightService } from '../../services/height.service';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  title: string;
  workdata = WORKDATA;
  @ViewChild('work') elementView: ElementRef;

  constructor(private heightService: HeightService) { }

  ngOnInit() {
    this.updateTitle(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateTitle(window.innerWidth);
    this.heightService.workH = this.elementView.nativeElement.offsetHeight;
  }

  ngAfterViewInit() {
    this.heightService.workH = this.elementView.nativeElement.offsetHeight;
  }

  private updateTitle(width: number) {
    if (width <= 575) {
      this.title = 'my life';
    } else {
      this.title = '───my life───';
    }
  }

}
