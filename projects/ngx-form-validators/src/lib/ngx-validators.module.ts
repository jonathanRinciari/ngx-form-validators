import { NgModule } from '@angular/core';
import { email, phone, password } from './validators';

export const NgxValidators = {
  email,
  phone,
  password
};


@NgModule({
  declarations: [],
  exports: []
})
export class NgxValidatorsModule { }
