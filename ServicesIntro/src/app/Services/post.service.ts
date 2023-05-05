import { Injectable } from '@angular/core';

export class PostService {
  //with this we are providing service class as an injectable for root app, which means we can inject this service class to any components in our app without creating a new instance each and every new component. 
  @Injectable({
    providedIn: 'root',
  })


  postList: Array<any> = [
    { id: 1, postTitle: 'post 1' },
    { id: 2, postTitle: 'post 2' },
    { id: 3, postTitle: 'post 3' },
    { id: 4, postTitle: 'post 4' },
    { id: 5, postTitle: 'post 5' },
    { id: 6, postTitle: 'post 6' },
  ];
}
