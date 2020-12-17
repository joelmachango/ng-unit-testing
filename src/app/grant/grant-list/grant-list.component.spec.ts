import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { GrantListComponent } from './grant-list.component';

import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrantService } from '../grant.service';
import { GrantServiceMock } from '../grant.service.mock';

describe('GrantListComponent', () => {
  let component: GrantListComponent;
  let fixture: ComponentFixture<GrantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrantListComponent],
      providers: [{ provide: GrantService, useClass: GrantServiceMock }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GrantListComponent);
        // GrantComponent test instance
        component = fixture.componentInstance;
      });
  }));

  it(`should have one grant`, async(() => {
    expect(component.grants.length).toEqual(1);
  }));

  it(`html should render one grant`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('COVID 19 vaccine');
  }));
});
