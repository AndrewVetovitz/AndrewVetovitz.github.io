import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: string;

  constructor() {
  }

  public innerWidth: any;
  ngOnInit() {
    this.updateName(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateName(window.innerWidth);
  }

  private updateName(width: any) {
    if(width > 610){
      this.name = "Andrew Gunner Vetovitz";
    } else {
      this.name = "Andrew G. Vetovitz";
    }
  }
}
