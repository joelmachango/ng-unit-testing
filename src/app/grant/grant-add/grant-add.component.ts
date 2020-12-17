import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grant-add',
  templateUrl: './grant-add.component.html',
  styleUrls: ['./grant-add.component.scss'],
})
export class GrantAddComponent implements OnInit {
  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: '',
  };
  submitted = false;

  constructor() {
    this.createForm();
  }
  // The contact form has three controls with their validations.
  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl(this.contact.text, Validators.required),
    });
  }

  // changes the submitted property to true
  onSubmit(): void {
    this.submitted = true;
  }

  ngOnInit(): void {}
}
