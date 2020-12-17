import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DebugElement } from '@angular/core';

import { GrantAddComponent } from './grant-add.component';

describe('GrantAddComponent', () => {
  let component: GrantAddComponent;
  let fixture: ComponentFixture<GrantAddComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantAddComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GrantAddComponent);

        // GrantAddComponent test instance
        component = fixture.componentInstance;

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'add grant page'`, async(() => {
    expect(component.text).toEqual('add grant page');
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    component.grantForm.controls['grantor'].setValue('');
    component.grantForm.controls['name'].setValue('');
    component.grantForm.controls['amount'].setValue('');
    expect(component.grantForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.grantForm.controls['grantor'].setValue('USAID');
    component.grantForm.controls['name'].setValue('aada');
    component.grantForm.controls['amount'].setValue(10000);
    expect(component.grantForm.valid).toBeTruthy();
  }));

  // should call the onSubmit method
});
