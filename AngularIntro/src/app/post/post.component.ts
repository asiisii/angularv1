import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  postData: string = 'this is the data from the post component';
  childMsg: string = 'this is the child message from the post component';
  outputChildMsg: string =
    'this is the output child message from the post component';

  // testing
  imgURL!: string;
  postURL!: string;
  postTitle!: string;
  postDetails!: string;
  moreDetailsLink!: string;
  shouldAddBackgroundColor: boolean = false;
  displayMoreDetails: boolean = false;

  @Input()
  fromParent!: string;

  @Output() msgEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMsg(): void {
    this.msgEvent.emit(this.outputChildMsg);
  }

  updateBackgroundColor() {
    console.log('====================================');
    console.log('checkbox selected');
    console.log('====================================');
    this.shouldAddBackgroundColor = !this.shouldAddBackgroundColor;
  }

  updateDisplayMoreDetails() {
    this.displayMoreDetails = !this.displayMoreDetails
  }
}
