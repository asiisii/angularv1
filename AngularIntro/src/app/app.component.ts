import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

interface AppComponentProps {
  childMsg: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'AngularIntro';
  parentMsg: string = 'Message from parent component';
  msg!: string;
  fromChildOutput!: string;

  @ViewChild(PostComponent) childComp!: AppComponentProps;

  ngAfterViewInit(): void {
    this.msg = this.childComp.childMsg;
  }

  reciveMsg($event: any){
    console.log('====================================');
    console.log($event);
    this.fromChildOutput = $event
    console.log('====================================');
  }
}
