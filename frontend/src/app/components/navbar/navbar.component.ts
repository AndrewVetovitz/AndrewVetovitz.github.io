import { Component, HostListener, Input, OnChanges, AfterViewChecked } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HeightService } from '../../services/height.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges, AfterViewChecked {
  offset: string = "75";
  scrollOffset: number = 40;
  height = [];

  constructor(private heightService: HeightService) {
  }

  @Input()
  public selectSection$: ReplaySubject<string>;

  public sections = [
    { active: true, id: 'about' },
    { active: false, id: 'work' },
    { active: false, id: 'projects' },
    { active: false, id: 'contact' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.height[0] = this.heightService.aboutH - 75;
    this.height[1] = this.heightService.workH + this.height[0] - 5;
    this.height[2] = this.heightService.projectsH + this.height[1] - 5;
    this.height[3] = this.heightService.contactH + this.height[2];
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkContent(window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0);
  }

  checkContent(scrollH: number){
    console.log(scrollH);
    if(scrollH >= 0 && scrollH < this.height[0]){
      console.log('inside about');
      this.updateLink('about');
    } else if(scrollH >= this.height[0] && scrollH < this.height[1]){
      console.log('inside work');
      this.updateLink('work');
    } else if(scrollH >= this.height[1] && scrollH < this.height[2]){
      console.log('inside projects');
      this.updateLink('projects');
    } else {
      console.log('inside contact');
      this.updateLink('contact');
    }
  }

  ngAfterViewChecked() {
    this.height[0] = this.heightService.aboutH - 75;
    this.height[1] = this.heightService.workH + this.height[0] - 5;
    this.height[2] = this.heightService.projectsH + this.height[1] - 5;
    this.height[3] = this.heightService.contactH + this.height[2];
  }

  ngOnChanges() {
    this.selectSection$.subscribe((id) => {
      this.updateLink(id)
    });
  }

  updateLink(id: string) {
    this.sections.forEach(section => {
      section.active = section.id === id;
    });
  }
}
