import { TestBed } from '@angular/core/testing';
import { email } from './email.validator';
import { FormControl, Validators } from '@angular/forms';

describe('Email Validator', () => {
  const error = {email: true};
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return true', () => {
    const control = new FormControl('jrinciari@gmail.com');
    expect(email(control)).toBeNull();
  });

  it('should return false', () => {
    const control = new FormControl('jrinciari');
    expect(email(control)).toEqual(error);
  });
});
