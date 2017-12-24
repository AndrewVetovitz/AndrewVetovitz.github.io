import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  constructor() { }

  ngOnInit() {
  }

  public submit() {
    console.log(this.model.firstName);
    console.log(this.model.lastName);
    console.log(this.model.email);
    console.log(this.model.message);
  }

}
