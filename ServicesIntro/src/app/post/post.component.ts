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
    this.posts = postService.postList;
  }

  addPost() {
    let newPost = {
      id: this.posts.length + 1,
      postTitle: 'post ' + (this.posts.length + 1),
    };
    this.postService.addPost(newPost);
  }
}
