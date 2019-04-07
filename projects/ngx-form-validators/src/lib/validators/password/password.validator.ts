import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export interface Config {
  uppercase?: boolean;
  lowercase?: boolean;
  specialChar?: boolean;
  number?: boolean;
}

export const password = (config: Config = {uppercase: true, lowercase: true, specialChar: true, number: true}): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (Validators.required(control) !== null && Validators.required(control) !== undefined) {
      return null;
    }
    const value = control.value;
    const upperCaseCharacters = /[A-Z]+/g;
    const lowerCaseCharacters = /[a-z]+/g;
    const numberCharacters = /[0-9]+/g;
    const specialCharacters = /[!@#$%^&*()_+\-\[\]{};':"\\|,.<>\/?]+/;
    const map = {
      uppercase: upperCaseCharacters.test(value),
      lowercase: lowerCaseCharacters.test(value),
      number: numberCharacters.test(value),
      specialChar: specialCharacters.test(value)
    };

    const filteredConfig = Object.keys(config).filter((key) => {
      if (config[key] && map.hasOwnProperty(key)) {
        return key;
      }
    });

    const result = filteredConfig.reduce((acc, next) => {
        if (acc === undefined ) {
          acc = map[next];
        }
        return acc && map[next];
      }, undefined);

      return result ? null : { password: true };
  };
};
