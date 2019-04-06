import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isValidNumber, NationalNumber, ParsedNumber, CountryCode } from 'libphonenumber-js';



export const phone = (country: CountryCode = 'US'): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (Validators.required(control) !== null && Validators.required(control) !== undefined) {
      return null;
    }

    const value: ParsedNumber = {phone: control.value, country};
    return isValidNumber(value) ? null : {phone: true};
  };
};


