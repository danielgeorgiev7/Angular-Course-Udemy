import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter } from 'rxjs-compat/operator/filter';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObjSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.firstObjSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is higher than 3'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe(
    //   filter((data: number) => {
    //     return data > 0;
    //   }),
    //   map((data: number) => {
    //     return 'Round: ' + (data + 1);
    //   })
    // );

    this.firstObjSubscription = customIntervalObservable.subscribe(
      (data: number) => {
        console.log(data);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      }
    );
  }
  ngOnDestroy(): void {
    this.firstObjSubscription.unsubscribe();
  }
}
