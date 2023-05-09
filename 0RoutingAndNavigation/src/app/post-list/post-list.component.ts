import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [
    {
      id: 0,
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      id: 1,
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      id: 2,
      title: 'Title 3',
      content:
        'Lorem ipsum dolor  consectetur adip    sit amet, consectetur adip',
    },
    {
      id: 3,
      title: 'Title 4',
      content: 'Lorem ipsum',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      console.log(value);
      
      const page = value.get('page');
      const order = value.get('orderBy');
      console.log({ page, order });
    });
  }
}
