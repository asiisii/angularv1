import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postArr: Array<string> = ['Post1', 'Post2', 'Post3', 'Post4', 'Post5'];
  objArr: Array<any> = [
    { id: 1, postTitle: 'Post1' },
    { id: 2, postTitle: 'Post2' },
    { id: 3, postTitle: 'Post3' },
    { id: 4, postTitle: 'Post4' },
    { id: 5, postTitle: 'Post5' },
  ];
}
