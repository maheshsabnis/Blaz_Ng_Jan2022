import {AbstractControl} from '@angular/forms';
export class CustomValidation {
  static checkEven(ctrl:AbstractControl):any{
      if(parseInt(ctrl.value) % 2 === 0) {
          return null; // valid
      } else {
          // The JSON Object's Key (i.e. odd) will be used
          // for validation error message
          return {odd:true};
      }
  }
}