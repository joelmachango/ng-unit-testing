import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantAddComponent } from './grant-add.component';

describe('GrantAddComponent', () => {
  let component: GrantAddComponent;
  let fixture: ComponentFixture<GrantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
