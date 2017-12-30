import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'contact',
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

  constructor(private formService: FormsService) { }

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
      }),
      _gotcha: new FormControl('', {
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
      this.layoutClass = 'form-inline';
      this.spaceClass = 'inputSpace'
    } else {
      this.spaceClass = 'width100';
      this.layoutClass = '';
    }
  }

  public submit(){
    if (this.form.valid) {
      this.isSubmitted = true;
      this.submitted = false;

      const body = {
        name: this.form.value.firstname + ' ' + this.form.value.lastname,
        email: this.form.value.email,
        message: this.form.value.message,
        _gotcha: this.form.value._gotcha
      };

      this.formService.postFormData(body).subscribe(data => {
        console.log("success");
        this.form.reset();
      });
    } else {
      this.submitted = true;
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
