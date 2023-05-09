import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-validations',
  templateUrl: './custom-validations.component.html',
})
export class CustomValidationsComponent {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required],
    });
  }

  get fc() {
    return this.form.controls;
  }
}
