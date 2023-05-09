import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactNumRegex: string = '[789][0-9]{9}';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contactDetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNumber: [
          '',
          [Validators.required, Validators.pattern(this.contactNumRegex)],
        ],
      }),
      skills: fb.array([])
    });

    // this.form = new FormGroup({
    //   fullName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     // Validators.pattern(this.emailRegex),
    //     Validators.email,
    //   ]),
    //   // address: new FormControl('', Validators.required),

    //   contactDetails: new FormGroup({
    //     address: new FormControl('', Validators.required),
    //     shippingAddress: new FormControl('', Validators.required),
    //     contactNumber: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(this.contactNumRegex),
    //     ]),
    //   }),

    //   skills: new FormArray([]),
    // });
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get ContactNum() {
    return this.form.get('contactDetails.contactNumber');
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkills(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';

    console.log('====================================');
    console.log(this.form.value);
    console.log('====================================');
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
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
