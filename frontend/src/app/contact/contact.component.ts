import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  layoutClass: string;
  spaceClass: string;
  isSubmitted: boolean;
  submitted: boolean;
  form: FormGroup;
  danger: string;

  constructor() { }

  ngOnInit() {
    this.updateLayout(window.innerWidth);
    this.submitted = false;

    this.form = new FormGroup ({
      firstname: new FormControl('', {
        validators: [ Validators.required, Validators.min(1) ],
        updateOn: 'submit'
      }),
      lastname: new FormControl('', {
        validators: [ Validators.required, Validators.min(1) ],
        updateOn: 'submit'
      }),
      email: new FormControl('', {
        validators: [ Validators.required, Validators.min(1), Validators.email ],
        updateOn: 'submit'
      }),
      message: new FormControl('', {
        validators: [ Validators.required, Validators.min(1) ],
        updateOn: 'submit'
      })
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateLayout(window.innerWidth);
  }

  private updateLayout(width: number) {
    if(width >= 400){
      this.layoutClass = "form-inline";
      this.spaceClass = "inputSpace"
    } else {
      this.spaceClass = "width100";
      this.layoutClass = "";
    }
  }

  public submit(){
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log(this.form.value.firstname);
      console.log(this.form.value.lastname);
      console.log(this.form.value.email);
      console.log(this.form.value.message);
      this.submitted = false;
      this.form.reset();
    } else {
      this.submitted = true;
      console.log("invalid form");
    }
  }

  isFieldValid(field: string) {
    return this.form.get(field).valid;
  }

  cssInvalid(field: string) {
    if(!this.isFieldValid(field) && this.submitted) {
      return 'is-invalid';
    }
    return '';
  }
}
