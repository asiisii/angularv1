import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern(this.emailRegex),
        Validators.email,
      ]),
      address: new FormControl('', Validators.required),
    });
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('address');
  }

  onSubmit() {
    console.log('====================================');
    console.log(this.form.value);
    console.log('====================================');
  }

  getValue(f: FormControl) {
    console.log('====================================');
    console.log(f);
    console.log('====================================');
  }
}
