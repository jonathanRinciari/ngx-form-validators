import { TestBed } from '@angular/core/testing';
import { password  } from './password.validator';
import { FormControl } from '@angular/forms';

describe('passwordStrength', () => {
  const error = {password: true};
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it('Valid when containing all expected characters', () => {
    const formState = 'Ab1.';
    expect(new FormControl(formState, [password()]).valid).toBe(true);
  });
  it('invalid when containing only numeric characters', () => {
    const formState = '0123456789';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only alphabetic characters', () => {
    const formState = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only upercase alphabetic characters', () => {
    const formState = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only lowercase alphabetic characters', () => {
    const formState = 'abcdefghijklmnopqrstuvwxyz';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only special characters', () => {
    const formState = '!@#$%^&*()_+-[]{};\':"\\|,.<>/?';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only special characters and upercase alphabetic characters', () => {
    const formState = '!A';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only special characters and lowercase alphabetic characters', () => {
    const formState = '!a';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only special characters and numeric alphabetic characters', () => {
    const formState = '!1';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only upercase alphabetic and numeric characters', () => {
    const formState = 'A1';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('invalid when containing only lowercase alphabetic and numeric characters', () => {
    const formState = 'a1';
    expect(new FormControl(formState, [password()]).valid).toBe(false);
    expect(new FormControl(formState, [password()]).errors).toEqual(error);
  });
  it('null errors when form value is null', () => {
    expect(new FormControl(null, [password()]).errors).toBe(null);
  });
});
