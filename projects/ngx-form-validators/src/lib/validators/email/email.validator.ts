import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { emailRegex } from '../../regex/email';



export const email: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (Validators.required(control) !== null && Validators.required(control) !== undefined) {
    return null;
  }

  return emailRegex.test(control.value) ? null : { 'email': true };
};


