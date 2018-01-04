import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.updateTitle(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateTitle(window.innerWidth);
  }

  private updateTitle(width: number) {
    if (width <= 749) {
      this.title = 'my aspiration';
    } else {
      this.title = '───my aspiration───';
    }
  }
}
