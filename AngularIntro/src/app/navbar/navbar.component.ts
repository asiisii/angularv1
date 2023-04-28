import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  // template: '<h1>Navbar Template</h1>',
  // styles:[`h1 {
  //   color: red;
  // }`], //with backticks we can use multiple line css or html tags

  // styles: ['h1 { color: red; }'], <- has to be in one line
})
export class NavbarComponent {}
