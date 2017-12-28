import { Component, OnInit } from '@angular/core';

import { WORKDATA } from './work-data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workdata = WORKDATA;

  constructor() { }

  ngOnInit() {
  }

}
