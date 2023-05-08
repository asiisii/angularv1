import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSubmit(f: NgForm) {
    console.log('====================================');
    console.log(f.value);
    console.log('====================================');
  }

  getValue(f: any) {
    console.log('====================================');
    console.log(f);
    console.log('====================================');
  }
}
