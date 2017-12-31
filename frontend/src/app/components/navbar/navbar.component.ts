import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  horizontalNavClass: string;
  verticalNavClass: string;
  offset: string = "70";

  constructor() {
  }

  ngOnInit() {
    this.updateNavWidth(window.innerWidth);
    this.updateNavScroll(window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateNavWidth(window.innerWidth);
  }

  private updateNavWidth(width: number) {
    if(width >= 650){
      this.horizontalNavClass = "justify-content-end";
    } else {
      this.horizontalNavClass = "justify-content-center";

      if(width <= 510){
        this.horizontalNavClass += " " + "flex-column";
      }
    }
  }

  private updateNavScroll(height: number) {
    if(height <= 1000) {
      this.verticalNavClass = "nav-transparent-background";
    } else {
      this.verticalNavClass = "nav-background";
    }
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    this.updateNavScroll(window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0);
  }
}
