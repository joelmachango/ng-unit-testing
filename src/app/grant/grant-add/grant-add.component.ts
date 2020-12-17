import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grant-add',
  templateUrl: './grant-add.component.html',
  styleUrls: ['./grant-add.component.scss'],
})
export class GrantAddComponent implements OnInit {
  text = 'add grant page';
  grantForm: FormGroup;
  grant = {
    name: '',
    grantor: '',
    amount: '',
  };
  submitted = false;

  constructor() {
    this.createForm();
  }
  // The grant form controls with their validations.
  createForm(): void {
    this.grantForm = new FormGroup({
      name: new FormControl(this.grant.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      grantor: new FormControl(this.grant.grantor, [
        Validators.required,
        Validators.minLength(4),
      ]),
      amount: new FormControl(this.grant.amount, Validators.required),
    });
  }

  // changes the submitted property to true
  onSubmit(): void {
    this.submitted = true;
  }

  ngOnInit(): void {}
}
