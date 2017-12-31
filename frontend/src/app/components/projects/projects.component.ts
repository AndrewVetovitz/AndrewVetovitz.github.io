import { Component, HostListener, OnInit } from '@angular/core';

import { PROJECTDATA } from './project-data';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title: string;

  groupSize = 3;
  projects = PROJECTDATA;

  constructor() { }

  ngOnInit() {
    this.updateTitle(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateTitle(window.innerWidth);
  }

  private updateTitle(width: number) {
    if(width <= 575) {
      this.title = 'projects';
    } else {
      this.title = '───projects───';
    }
  }
}
