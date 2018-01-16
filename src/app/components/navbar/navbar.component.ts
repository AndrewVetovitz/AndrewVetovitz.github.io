import { Component, HostListener, Input, OnChanges, AfterViewChecked } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HeightService } from '../../services/height.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges, AfterViewChecked {
  offset = '68';
  transparent: string;
  name: string;
  height = [];

  constructor(private heightService: HeightService) { }

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
    this.height[2] = this.heightService.projectsH + this.height[1];
    this.height[3] = this.heightService.contactH + this.height[2];
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.checkContent(scrollH);
    this.customNav(scrollH);
  }

  checkContent(scrollH: number) {
    if (scrollH >= 0 && scrollH < this.height[0]) {
      this.updateLink('about');
    } else if (scrollH >= this.height[0] && scrollH < this.height[1]) {
      this.updateLink('work');
    } else if (scrollH >= this.height[1] && scrollH < this.height[2]) {
      this.updateLink('projects');
    } else {
      this.updateLink('contact');
    }
  }

  customNav(scrollH: number) {
    if (scrollH < 1000) {
      this.transparent = '';
      this.name = '';
    } else {
      this.transparent = 'custom-nav';
      this.name = 'Andrew Vetovitz';
    }
  }

  ngAfterViewChecked() {
    this.height[0] = this.heightService.aboutH - 75;
    this.height[1] = this.heightService.workH + this.height[0] - 5;
    this.height[2] = this.heightService.projectsH + this.height[1];
    this.height[3] = this.heightService.contactH + this.height[2];
  }

  ngOnChanges() {
    this.selectSection$.subscribe((id) => {
      this.updateLink(id);
    });
  }

  updateLink(id: string) {
    this.sections.forEach(section => {
      section.active = section.id === id;
    });
  }
}
