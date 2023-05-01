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
  isDanger: boolean = true;
  imgUrl: string =
    'https://img.freepik.com/premium-psd/google-icon-isolated_68185-565.jpg?w=360';
  parentMsg: string = 'Message from parent component';
  msg!: string;
  fromChildOutput!: string;
  userName!: string;
  oneWayDataTypeTest: string = 'this is one way data type test';

  @ViewChild(PostComponent) childComp!: AppComponentProps;

  ngAfterViewInit(): void {
    this.msg = this.childComp.childMsg;
  }

  reciveMsg($event: any) {
    console.log('====================================');
    console.log($event);
    this.fromChildOutput = $event;
    console.log('====================================');
  }

  handleEventBinding() {
    console.log('====================================');
    console.log('event binding button clicked');
    console.log('====================================');
  }

  handleEventFilteringAngularWay() {
    console.log('====================================');
    console.log('Enter key pressed');
    console.log('====================================');
  }

  templateVairable(data: string) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  }

  templateVairable2() {
    console.log('====================================');
    console.log(this.userName);
    console.log(this.oneWayDataTypeTest);
    
  }
}
