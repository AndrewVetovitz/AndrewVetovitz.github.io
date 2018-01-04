import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { PROJECTDATA } from './project-data';
import { HeightService } from '../../services/height.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  title: string;
  projects = PROJECTDATA;
  @ViewChild('project') elementView: ElementRef;

  constructor(private heightService: HeightService) { }

  ngOnInit() {
    this.updateTitle(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateTitle(window.innerWidth);
    this.heightService.projectsH = this.elementView.nativeElement.offsetHeight;
  }

  ngAfterViewInit() {
    this.heightService.projectsH = this.elementView.nativeElement.offsetHeight;
  }

  private updateTitle(width: number) {
    if (width <= 575) {
      this.title = 'projects';
    } else {
      this.title = '───projects───';
    }
  }
}
