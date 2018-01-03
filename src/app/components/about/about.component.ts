import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeightService } from '../../services/height.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private heightService: HeightService) { }

  @ViewChild('about') elementView: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.heightService.aboutH = this.elementView.nativeElement.offsetHeight;
  }

  ngAfterViewInit() {
    this.heightService.aboutH = this.elementView.nativeElement.offsetHeight;
  }
}