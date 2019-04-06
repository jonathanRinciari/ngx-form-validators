import { TestBed } from '@angular/core/testing';
import { phone } from './phone.validator';
import { FormControl } from '@angular/forms';

describe('Phone Validator', () => {
  const error = {phone: true};
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return true', () => {
    const control = new FormControl('2037330596');
    expect(phone('US')(control)).toBeNull();
  });

  it('should return false', () => {
    const control = new FormControl('203730596');
    expect(phone('US')(control)).toEqual(error);
  });
});
