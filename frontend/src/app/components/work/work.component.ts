import { Component, OnInit } from '@angular/core';

import { WORKDATA } from './work-data';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  title: string = '───my life───';
  workdata = WORKDATA;

  constructor() { }

  ngOnInit() {
  }

}
