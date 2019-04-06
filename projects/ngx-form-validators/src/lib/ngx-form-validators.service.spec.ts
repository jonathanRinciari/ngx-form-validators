import { TestBed } from '@angular/core/testing';

import { NgxFormValidatorsService } from './ngx-form-validators.service';

describe('NgxFormValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormValidatorsService = TestBed.get(NgxFormValidatorsService);
    expect(service).toBeTruthy();
  });
});
