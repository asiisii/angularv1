import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css'],
})
export class DirectivesPracticeComponent {
  userDetails: Array<any> = [];

  name!: string;
  email!: string;
  address!: string;

  handleSave($event: any) {
    $event.preventDefault();

    this.userDetails.push({
      id: this.userDetails.length + 1,
      name: this.name,
      email: this.email,
      address: this.address,
    });

    console.log('====================================');
    console.log(this.userDetails);
    console.log('====================================');
  }

  deleteUser(index: number) {
    this.userDetails.splice(index, 1);
  }
}
