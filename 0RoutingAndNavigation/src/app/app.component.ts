import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '0RoutingAndNavigation';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const obsTest$ = new Observable((observer) => {
      // can return multiple Observables data
      observer.next('Return from observable');
      observer.next('Return from second observable');

      setTimeout(() => {
        observer.next('From settime out obserable');
      }, 2000);

      observer.next('Return from third observable');
    }).subscribe((value) => {
      console.log(value);
    });

    obsTest$.unsubscribe();

    const obsTest = function () {
      return 'printed from a function';
      return 'printed from a 2nd function';
    };
    const returnData = obsTest();
    console.log(returnData);
  }

  onSubmit() {
    // this.router.navigate(['/posts']);
    // this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['posts'], {queryParams: {page: 1, order: 'newest'}});
  }
}
