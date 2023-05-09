import { AbstractControl, ValidationErrors } from '@angular/forms';

export class noSpace {
  static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;
    console.log('====================================');
    console.log(controlValue.indexOf(' '));
    console.log('====================================');
    if (controlValue.indexOf(' ') >= 0) {
      return { noSpaceValidator: true };
    } else {
      return null;
    }
  }
}
