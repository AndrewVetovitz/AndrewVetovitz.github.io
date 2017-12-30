import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navClass: string;

  constructor() {
  }

  ngOnInit() {
    this.updateName(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateName(window.innerWidth);
  }

  private updateName(width: number) {
    if(width >= 650){
      this.navClass = "justify-content-end";
    } else {
      this.navClass = "justify-content-center";

      if(width <= 375){
        this.navClass += " " + "flex-column";
      }
    }
  }
}
