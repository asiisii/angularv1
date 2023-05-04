import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Pipe section';
  count: number = 123456789;
  decVal: number = 3.1235;
  price: number = 9.99;
  todaysDate: Date = new Date();
  jsonPipe: object = {
    name: 'John Doe',
    age: 30,
    address: {},
  };
  percentagePipe: number = 0.589;
  slicePipe: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  userDetails: any = {
    name: 'John Doe',
    age: 30,
    address: {},
  };

  dummyData: string =
    'lorem ipsum dolor sit amet lore mauris et justo sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  pariatur. Lorem ipsum dolor sit amet lore mauris et justo sed do eiusmod tempor incidid incididunt ut labore et dolore magna aliqua pariatur. Lorem ipsum dolor sit amet lore mauris et justo sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  pariatur. Lorem ipsum dolor sit amet lore mauris et justo sed  do eiusmod tempor incid  idunt ut labore et dolore magna aliqua pari volatile. Lorem ipsum dolor sit amet lore maur ist et justo sed do eiusmod tempor incididunt ut labore et';
}
