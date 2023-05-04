import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postArr: Array<string> = ['Post1', 'Post2', 'Post3', 'Post4', 'Post5'];
  objArr: Array<any> = [{ id: 1, postTitle: 'Post1' }];

  emptyObjArr: Array<any> = [];
  stepForm!: string;
  isActive: boolean = true;

  // change detection
  addData() {
    this.objArr.push({
      id: this.objArr.length + 1,
      postTitle: 'Post' + (this.objArr.length + 1),
    });
    this.emptyObjArr.push({
      id: this.objArr.length + 1,
      postTitle: 'Post' + (this.objArr.length + 1),
    });
  }

  deleteData(index: number) {
    // in react we would pass post.id to remove
    // this.objArr = this.objArr.filter((data) => data.id !== id);

    this.objArr.splice(index, 1);
  }

  handleStepForm(status: string) {
    this.stepForm = status;
  }
}
