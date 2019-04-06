import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormValidatorsComponent } from './ngx-form-validators.component';

describe('NgxFormValidatorsComponent', () => {
  let component: NgxFormValidatorsComponent;
  let fixture: ComponentFixture<NgxFormValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
