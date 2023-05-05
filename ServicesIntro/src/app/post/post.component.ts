import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts!: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService()
    this.posts = postService.postList;
  }
}
